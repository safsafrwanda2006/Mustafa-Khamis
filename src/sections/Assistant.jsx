import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Assistant.module.css';

const services = [
  {
    title: "Concept Explainer",
    short: "Technical clarity",
    desc: "Stop struggling with complex documentation. I break down advanced software architecture, algorithms, and frameworks into clear, visually mapped mental models.",
    icon: <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  },
  {
    title: "Advanced Debugging",
    short: "Squash elusive bugs",
    desc: "Live pair-programming sessions to trace, isolate, and resolve the toughest state-management, memory leak, or asynchronous bugs in your codebase.",
    icon: <path d="M11 20l-7-7 1.5-1.5L11 17l9-9 1.5 1.5z" />
  },
  {
    title: "Code Review & Optimize",
    short: "Scale-ready code",
    desc: "Comprehensive audits of your React/Node environments. I identify performance bottlenecks, enforce clean code practices, and structure your app for scale.",
    icon: <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  },
  {
    title: "Architecture Advice",
    short: "System design",
    desc: "Building an MVP? I'll help you design your database schema, select the right tech stack, and map out your API endpoints properly.",
    icon: <path d="M3 3h18v18H3zM9 9h6v6H9z" />
  }
];

export default function Assistant() { 
  const [activeId, setActiveId] = useState(0);

  const handleBookSession = () => {
    const selectedService = services[activeId];
    const phoneNumber = "250794101251";
    
    const message = `
*NEW SESSION BOOKING*
----------------------------
*SERVICE:* ${selectedService.title}
*FOCUS:* ${selectedService.short}

I would like to book a session to discuss this further. Please let me know your availability.
----------------------------
Sent via Assistant Dashboard.
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id='assistant' className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={styles.heading}
          >
            Dev & Student <span className="gradient-text">Assistant</span>
          </motion.h2>
          <p className={styles.sub}>
            Premium support to unblock your development, optimize codebases, and accelerate technical mastery.
          </p>
        </div>

        <div className={styles.dashboard}>
          <div className={styles.sidebar}>
            {services.map((svc, idx) => (
              <button 
                key={idx}
                className={`${styles.tab} ${activeId === idx ? styles.activeTab : ''}`}
                onClick={() => setActiveId(idx)}
              >
                <div className={styles.tabContent}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.tabIcon}>
                    {svc.icon}
                  </svg>
                  <div>
                    <h4>{svc.title}</h4>
                    <span>{svc.short}</span>
                  </div>
                </div>
                {activeId === idx && (
                  <motion.div layoutId="activeHighlight" className={styles.highlight} transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
                )}
              </button>
            ))}
          </div>

          <div className={styles.viewer}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className={styles.viewerContent}
              >
                <div className={styles.badge}>Service Detail</div>
                <h3 className={styles.viewerTitle}>{services[activeId].title}</h3>
                <p className={styles.viewerDesc}>{services[activeId].desc}</p>
                
                <div className={styles.actionGroup}>
                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    onClick={handleBookSession}
                    className={styles.actionBtn}
                  >
                    Book a Session
                  </motion.button>
                  <span className={styles.priceHint}>Starting at $5/hr</span>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className={styles.spotlight} />
          </div>
        </div>
      </div>
    </section>
  );
}