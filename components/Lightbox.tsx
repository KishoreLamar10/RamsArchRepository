'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Lightbox.module.css';

interface Props {
  src: string | null;
  onClose: () => void;
}

export default function Lightbox({ src, onClose }: Props) {
  const [transform, setTransform] = useState({ scale: 1, x: 0, y: 0 });
  const isPanning = useRef(false);
  const startPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (src) setTransform({ scale: 1, x: 0, y: 0 });
  }, [src]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  function onWheel(e: React.WheelEvent) {
    e.preventDefault();
    setTransform((t) => {
      const xs = (e.clientX - t.x) / t.scale;
      const ys = (e.clientY - t.y) / t.scale;
      const newScale = e.deltaY < 0
        ? Math.min(t.scale * 1.15, 6)
        : Math.max(t.scale / 1.15, 0.75);
      return { scale: newScale, x: e.clientX - xs * newScale, y: e.clientY - ys * newScale };
    });
  }

  function onMouseDown(e: React.MouseEvent) {
    e.preventDefault();
    isPanning.current = true;
    startPos.current = { x: e.clientX - transform.x, y: e.clientY - transform.y };
  }

  function onMouseMove(e: React.MouseEvent) {
    if (!isPanning.current) return;
    setTransform((t) => ({ ...t, x: e.clientX - startPos.current.x, y: e.clientY - startPos.current.y }));
  }

  function onMouseUp() { isPanning.current = false; }

  function onDblClick() { setTransform({ scale: 1, x: 0, y: 0 }); }

  if (!src) return null;

  return (
    <div
      className={styles.lightbox}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      onWheel={onWheel}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
    >
      <button className={styles.close} onClick={onClose} aria-label="Close">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <div className={styles.wrapper}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt="Zoomed drawing sheet"
          className={styles.img}
          draggable={false}
          style={{ transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})` }}
          onMouseDown={onMouseDown}
          onDoubleClick={onDblClick}
        />
      </div>
      <div className={styles.hint}>Use mouse wheel to zoom // Drag to pan // Double-click to reset</div>
    </div>
  );
}
