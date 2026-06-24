'use client';

import { useState } from 'react';
import { PROJECTS_DATA, Project } from '@/lib/projects';
import ProjectCard from './ProjectCard';
import ProjectOverlay from './ProjectOverlay';
import Lightbox from './Lightbox';
import styles from './PortfolioSection.module.css';

export default function PortfolioSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <section id="portfolio" className={styles.section}>
      <div className={styles.intro}>
        <h1 className={styles.introTitle}>Raamprakash Kalaiyarasan</h1>
        <p className={styles.introDesc}>Selected Architectural Works &amp; 3D Visualizations // 2018 — 2026</p>
      </div>

      <div className={styles.grid}>
        {PROJECTS_DATA.map((proj) => (
          <ProjectCard key={proj.id} project={proj} onClick={setActiveProject} />
        ))}
      </div>

      <ProjectOverlay
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onImageClick={(src) => setLightboxSrc(src)}
      />

      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </section>
  );
}
