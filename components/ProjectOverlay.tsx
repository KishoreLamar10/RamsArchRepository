'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { Project } from '@/lib/projects';
import styles from './ProjectOverlay.module.css';

interface Props {
  project: Project | null;
  onClose: () => void;
  onImageClick: (src: string) => void;
}

export default function ProjectOverlay({ project, onClose, onImageClick }: Props) {
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, [project]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className={`${styles.overlay} ${project ? styles.active : ''}`} aria-modal="true" role="dialog">
      <div className={styles.leftPanel}>
        <button className={styles.closeBtn} onClick={onClose}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to Grid
        </button>

        <div className={styles.meta}>
          <span className={styles.metaIndex}>PROJECT {project.index}</span>
          <h2 className={styles.metaTitle}>{project.title}</h2>
          <span className={styles.metaCategory}>{project.category}</span>
        </div>

        <div className={styles.metaList}>
          <div className={styles.metaItem}><span className={styles.lbl}>Location</span><span className={styles.val}>{project.location}</span></div>
          {project.university && <div className={styles.metaItem}><span className={styles.lbl}>Institution</span><span className={styles.val}>{project.university}</span></div>}
          <div className={styles.metaItem}><span className={styles.lbl}>Role</span><span className={styles.val}>{project.role}</span></div>
          <div className={styles.metaItem}><span className={styles.lbl}>Software</span><span className={styles.val}>{project.software}</span></div>
        </div>

        <p className={styles.description}>{project.description}</p>
      </div>

      <div className={styles.rightPanel}>
        <div className={styles.sheetsHeader}>
          <span className={styles.sheetsNum}>DRAWING SHEETS</span>
          <h3 className={styles.sheetsTitle}>Design <span>Drawings</span> &amp; Renders</h3>
        </div>
        {project.pages.map((page, idx) => {
          const src = `/Portfolio/${page}`;
          return (
            <div key={page} className={styles.sheetContainer} onClick={() => onImageClick(src)}>
              <Image
                src={src}
                alt={`Drawing sheet ${idx + 1}`}
                width={960}
                height={680}
                className={styles.sheetImg}
                style={{ width: '100%', height: 'auto' }}
              />
              <div className={styles.sheetOverlay}>
                SHEET {project.index}.{String(idx).padStart(2, '0')}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
