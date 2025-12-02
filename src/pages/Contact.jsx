import React, { useState } from "react";
import useSEO from "../hooks/useSEO";
import { FaGithub, FaLinkedin, FaGraduationCap } from "react-icons/fa6";
import { SiResearchgate } from "react-icons/si";

export default function Contact() {
  useSEO({
    title: "Contact | Sudipta Majumder",
    description:
      "Contact Sudipta Majumder for research collaboration, QML projects, academic queries, or professional communication.",
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSend = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=sudiptam.iitkgp.phy@gmail.com
&su=${encodeURIComponent(form.subject)}
&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;

    window.open(gmailUrl, "_blank");
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-wrapper">
        <h2 className="contact-title">
          Contact <span className="contact-title-white">Me</span>
        </h2>

        <div className="contact-grid">
          {/* LEFT INFO */}
          <div className="contact-left contact-left-fixed">
            <h2 className="contact-left-heading">Let’s Work Together</h2>

            <p className="contact-left-text">
              Whether it’s a research collaboration, academic query, or a QML
              project proposal, feel free to reach out. I’m always open to
              discussions and new ideas.
            </p>

            <a href="mailto:sudiptam.iitkgp.phy@gmail.com" className="contact-email">
              📧 sudiptam.iitkgp.phy@gmail.com
            </a>

            <div className="contact-icons">
              <a href="https://github.com/sudipta-on" target="_blank" className="contact-icon">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/sudipta-majumder/" target="_blank" className="contact-icon">
                <FaLinkedin />
              </a>
              <a href="https://scholar.google.com" target="_blank" className="contact-icon">
                <FaGraduationCap />
              </a>
              <a href="https://www.researchgate.net/profile/Sudipta-Majumder-3" target="_blank" className="contact-icon">
                <SiResearchgate />
              </a>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              onChange={handleChange}
              className="contact-input"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              onChange={handleChange}
              className="contact-input"
            />

            <input
              type="text"
              name="subject"
              placeholder="Enter Your Subject"
              onChange={handleChange}
              className="contact-input"
            />

            <textarea
              name="message"
              placeholder="Enter Your Message"
              rows="5"
              onChange={handleChange}
              className="contact-textarea"
            ></textarea>

            <button onClick={handleSend} className="contact-button">
              Send Message via Gmail
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
