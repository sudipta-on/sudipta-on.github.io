import React, { useEffect, useRef } from "react";
import useSEO from "../hooks/useSEO";

const publications = [
  {
    title:
      "Quantum Control of Quantum State Due to Weak Measurement using Deep Reinforcement Learning",
    journal: "M.Sc. Thesis • IIT Kharagpur",
    authors:
      "Sudipta Majumder • Prof. Sonjoy Majumder • Sabyasachi Mukhapadhayay • Shreya Bhatt",
    description:
      "Developed a deep reinforcement learning-based control framework for quantum state evolution under weak measurements. Simulated stochastic master equations to optimize feedback-driven quantum dynamics.",
    pdfLink: "#",
    type: "MTP",
  },
  {
    title:
      "Chaos in Skies: A Time Series Analysis of Meteorological Parameters in Top Cities of India",
    journal: "Mini-Project",
    authors:
      "Sudipta Majumder • Prof. Krishna Kumar • Swarajit Dhar • Jyotinmoy Karmakar",
    description:
      "Analyzed temperature, humidity, and wind-speed time series using chaos theory to detect nonlinear patterns in Indian cities. Identified chaotic indicators to improve predictability of extreme climate events.",
    pdfLink: "#",
    type: "Mini Project",
  },
];

const Publications = () => {
  const sectionRef = useRef(null);

  useSEO({
    title: "Publications | Sudipta Majumder",
    description:
      "Browse the research publications and major projects contributed by Sudipta Majumder.",
  });

  return (
    <section id="publications" ref={sectionRef} className="pub-section">
      <div className="pub-container">
        <h2 className="pub-title">Publications</h2>

        <div className="pub-list">
          {publications.map((pub, idx) => (
            <div key={idx} className="pub-card">
              <div className="pub-card-header">
                <span className="pub-type">{pub.type}</span>
                <span className="pub-journal">{pub.journal}</span>
              </div>

              <h3 className="pub-card-title">{pub.title}</h3>

              <p className="pub-authors">
                <span className="pub-auth-label">Authors: </span>
                {pub.authors}
              </p>

              <p className="pub-description">{pub.description}</p>

              <div className="pub-links">
                <a href={pub.pdfLink} className="pub-link">
                  PDF
                </a>
                {/* Optional BibTex */}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Publications;
