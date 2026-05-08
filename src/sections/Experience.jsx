// src/sections/Experience.jsx
import React from 'react';
import styles from './Experience.module.css';

export default function Experience() {
  const experiences = [
    {
      company: "exeCode",
      role: "Founder & Lead Engineer",
      period: "2024 - Present",
      tasks: ["Managing high-end software agency operations", "Architecting scalable SaaS solutions for global clients"]
    },
    {
      company: "samaLync",
      role: "Frontend Developer",
      period: "2026 - Present",
      tasks: ["Building core features for seamless digital connectivity", "Optimizing frontend performance and UI responsiveness"]
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Professional <span className="gradient-text">Trajectory</span></h2>
        <div className={styles.timeline}>
          {experiences.map((exp, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.header}>
                <div>
                  <h3>{exp.company}</h3>
                  <span>{exp.role}</span>
                </div>
                <div className={styles.period}>{exp.period}</div>
              </div>
              <ul className={styles.list}>
                {exp.tasks.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}