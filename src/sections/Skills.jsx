// src/sections/Skills.jsx
import React from 'react';
import styles from './Skills.module.css';

export default function Skills() {
  const techStack = [
    { name: "React", level: "Expert" },
    { name: "Vite", level: "Expert" },
    { name: "Node.js", level: "Advanced" },
    { name: "PostgreSQL", level: "Advanced" },
    { name: "Framer Motion", level: "Expert" },
    { name: "TypeScript", level: "Intermediate" }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.skillsGrid}>
          {techStack.map((skill, idx) => (
            <div key={idx} className={styles.skillBox}>
              <div className={styles.dot}></div>
              <h4>{skill.name}</h4>
              <span>{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}