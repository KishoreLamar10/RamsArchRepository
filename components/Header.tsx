'use client';

import { useEffect, useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [activeSection, setActiveSection] = useState('portfolio');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    function update() {
      let current = 'portfolio';
      const scrollPos = window.scrollY + 150;
      sections.forEach((sec) => {
        if (scrollPos >= (sec as HTMLElement).offsetTop) {
          current = sec.id;
        }
      });
      setActiveSection(current);
    }

    window.addEventListener('scroll', update);
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <header className={styles.header}>
      <a className={styles.brand} href="#portfolio" aria-label="Raamprakash Kalaiyarasan - Home">
        <span className={styles.brandName}>Raamprakash Kalaiyarasan</span>
      </a>
      <nav className={styles.nav} aria-label="Main Navigation">
        {[
          { href: '#portfolio', label: '01 // PORTFOLIO' },
          { href: '#about', label: '02 // CV' },
          { href: '#contact', label: '03 // CONNECT' },
        ].map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={activeSection === href.slice(1) ? styles.active : ''}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
