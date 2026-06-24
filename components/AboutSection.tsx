import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionNum}>02 // CURRICULUM VITAE</span>
        <h2 className={styles.sectionTitle}>Biography <span>&amp; Experience</span></h2>
      </div>

      <div className={styles.cvCard}>
        {/* Philosophy + Skills */}
        <div className={styles.col}>
          <h3>Design Philosophy</h3>
          <p>
            Driven by a passion for architectural design that blends form, function, and cutting-edge visual technology.
            Through academic work at UC and international professional roles, I leverage BIM modeling, digital twins, and
            parametric tools to deliver constructible design statements.
          </p>
          <div className={styles.skills}>
            <h4>Software Stack</h4>
            <div className={styles.chipRow}>
              {['Autocad 2D/3D','Autodesk Revit','Rhinoceros 3D','Sketchup','Blender'].map(s => <span key={s} className={styles.chip}>{s}</span>)}
            </div>
            <h4>Visualization &amp; Rendering</h4>
            <div className={styles.chipRow}>
              {['Lumion','Enscape','D5 Render','Photoshop','Premiere Pro','After Effects','AI Rendering'].map(s => <span key={s} className={styles.chip}>{s}</span>)}
            </div>
            <h4>Fabrication &amp; Hobbies</h4>
            <div className={styles.chipRow}>
              {['3D Printing','Model Making','Photography','Fitness','Graphic Design'].map(s => <span key={s} className={styles.chip}>{s}</span>)}
            </div>
          </div>
          <div className={styles.downloads}>
            <a href="/Portfolio/Raamprakash.K Resume.pdf" className={styles.btnDownload} download>Download Resume (PDF)</a>
            <a href="/Portfolio/Raamprakash - Portfolio.pdf" className={styles.btnDownload} download>Download Full Portfolio (PDF)</a>
          </div>
        </div>

        {/* Professional Timeline */}
        <div className={styles.col}>
          <h3>Professional Timeline</h3>
          <div className={styles.timeline}>
            {[
              { year: 'Summer 2026', role: 'Architectural Co-op', org: 'University of Cincinnati, DAAP // Cincinnati, USA', desc: 'Renovation projects across campus including the DAAP building. Assisted in creating BIM-based digital twins and coordinated digitalisation workflows.' },
              { year: 'Spring 2025', role: 'Architectural Co-op', org: 'MSA Design // Cincinnati, USA', desc: 'Contributed to large-scale sports, institutional, recreational, and historic revitalization projects. Worked fully in Revit and 3D modeling environments.' },
              { year: '2023 — 2024', role: 'Project Architect', org: 'Studio 7 Architects // Chennai, India', desc: 'Led design, site execution, drawing documentation, client relations, and vendor coordination for swimming stadiums, residences, and offices.' },
              { year: '2022', role: 'Trainee Architect', org: 'Betweenlines // Bangalore, India', desc: 'Detailed drawings and conceptual design for retail, museum layouts, commercial spaces, and textile showroom facades. Coordinated MEP integrations.' },
            ].map((item, i, arr) => (
              <div key={item.year} className={styles.timelineItem} style={i === arr.length - 1 ? { marginBottom: 0 } : {}}>
                <div className={styles.timelineYear}>{item.year}</div>
                <div className={styles.timelineRole}>{item.role}</div>
                <div className={styles.timelineOrg}>{item.org}</div>
                <p className={styles.timelineDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className={styles.col}>
          <h3>Education &amp; Credentials</h3>
          <div className={styles.timeline}>
            {[
              { year: '2024 — 2026', role: 'Master of Architecture', org: 'University of Cincinnati // Ohio, USA', desc: 'Graduate Assistant teaching digital media and design science. Specialised in technical modeling and simulation.' },
              { year: '2018 — 2023', role: 'Bachelor of Architecture', org: 'Anna University // Chennai, India', desc: '' },
              { year: 'COA License', role: 'Registered Architect in India', org: 'Council of Architecture // Reg. CA/2023/166905', desc: '' },
            ].map((item, i, arr) => (
              <div key={item.year} className={styles.timelineItem} style={i === arr.length - 1 ? { marginBottom: 0 } : {}}>
                <div className={styles.timelineYear}>{item.year}</div>
                <div className={styles.timelineRole}>{item.role}</div>
                <div className={styles.timelineOrg}>{item.org}</div>
                {item.desc && <p className={styles.timelineDesc}>{item.desc}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
