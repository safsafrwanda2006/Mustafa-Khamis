// src/sections/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import profileImage from "../assets/profile.png";

export default function Hero() {
  const metrics = [
    { value: "2+", label: "Years Experience" },
    { value: "99%", label: "Client Satisfaction" },
    { value: "10+", label: "Products Shipped" },
  ];

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className={styles.badge}>Available for new opportunities</div>
          <h1 className={styles.title}>
            Engineering <span className="gradient-text">Scalable Systems</span>{" "}
            & Web Products.
          </h1>
          <p className={styles.subtitle}>
            I build high-performance, conversion-optimized web applications.
            Specializing in modern architectures that drive real business
            results.
          </p>

          <div className={styles.ctaGroup}>
            <button
            onClick={()=>{
              window.location=("#startproject")
            }}
             className={styles.btnPrimary}>Start a Project</button>
            <button
            onClick={()=>{window.location=("/#projects")}}
             className={styles.btnSecondary}>View Projects</button>
          </div>

          <div className={styles.metrics}>
            {metrics.map((metric, i) => (
              <div key={i} className={styles.metricItem}>
                <h3>{metric.value}</h3>
                <p>{metric.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className={styles.glowOverlay}></div>
          <img
            src={profileImage}
            alt="Software Engineer"
            className={styles.image}
          />
        </motion.div>
      </div>
    </section>
  );
}
