// src/sections/Contact.jsx

import React, { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [openModal, setOpenModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    project: "",
    date: "",
    time: "",
    details: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBooking = () => {
    const message = `
*Discovery Call Booking*

👤 Name: ${formData.name}

💻 Project Type: ${formData.project}

📅 Preferred Date: ${formData.date}

⏰ Preferred Time: ${formData.time}

📝 Additional Details:
${formData.details}
    `;

    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://wa.me/250794101251?text=${encodedMessage}`,
      "_blank"
    );

    setOpenModal(false);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={`container ${styles.box}`}>
        <h2 className={styles.title}>
          Ready to <span className="gradient-text">Scale?</span>
        </h2>

        <p className={styles.description}>
          I’m currently accepting new projects at exeCode and
          individual consultations. Let’s build something that
          matters.
        </p>

        <div className={styles.actions}>
          <a
            href="mailto:safsafrwanda2006@gmail.com"
            className={styles.primary}
          >
            Send an Email
          </a>

          <button
            className={styles.secondary}
            onClick={() => setOpenModal(true)}
          >
            Book a Discovery Call
          </button>
        </div>
      </div>

      {/* MODAL */}

      {openModal && (
        <div
          className={styles.modalOverlay}
          onClick={() => setOpenModal(false)}
        >
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className={styles.modalTitle}>
              Book a Discovery Call
            </h3>

            <p className={styles.modalDesc}>
              Select your preferred time and tell me about
              your project.
            </p>

            <div className={styles.inputGroup}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />

              <input
                type="text"
                name="project"
                placeholder="Project Type"
                value={formData.project}
                onChange={handleChange}
              />

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />

              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
              />

              <textarea
                name="details"
                placeholder="Project details..."
                value={formData.details}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className={styles.modalActions}>
              <button
                className={styles.cancelBtn}
                onClick={() => setOpenModal(false)}
              >
                Cancel
              </button>

              <button
                className={styles.bookBtn}
                onClick={handleBooking}
              >
                Continue to WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}