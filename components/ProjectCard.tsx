import Image from 'next/image';
import { Project } from '@/lib/projects';
import styles from './ProjectCard.module.css';

interface Props {
  project: Project;
  onClick: (project: Project) => void;
}

export default function ProjectCard({ project, onClick }: Props) {
  return (
    <div className={styles.card} onClick={() => onClick(project)}>
      <div className={styles.imageWrap}>
        <Image
          className={styles.img}
          src={`/Portfolio/${project.thumbnailPage ?? project.pages[0]}`}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className={styles.content}>
        <span className={styles.index}>PROJECT {project.index}</span>
        <h3 className={styles.title}>{project.title}</h3>
        <span className={styles.category}>{project.category}</span>
      </div>
    </div>
  );
}
