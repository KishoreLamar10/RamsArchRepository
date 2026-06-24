import styles from './ContactSection.module.css';

export default function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.num}>03 // CONNECTION</span>
        <h2 className={styles.title}>Connect <span>with Raamprakash</span></h2>
      </div>
      <div className={styles.box}>
        <p className={styles.prompt}>For inquiries, collaborations, or professional opportunities, please connect via:</p>
        <div className={styles.links}>
          <a
            href="https://www.linkedin.com/in/raamprakash-k-a10217293"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkedinBtn}
          >
            LinkedIn Profile ↗
          </a>
          <a
            href="https://www.behance.net/gallery/235940063/Raamprakash"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.behanceBtn}
          >
            Behance Portfolio ↗
          </a>
        </div>
      </div>
    </section>
  );
}
