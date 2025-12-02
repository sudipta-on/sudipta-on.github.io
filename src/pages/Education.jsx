import React, { useRef } from "react";
import useSEO from "../hooks/useSEO";

const educationData = [
  {
    id: 1,
    title: "Ph.D. in Physics",
    institute: "IIT Kharagpur",
    duration: "2025 - Ongoing",
    logo: "/logos/iitkgp.png",
    description:
      "Pursuing research in Quantum Machine Learning under Prof. Sonjoy Majumder. My work explores hybrid quantum–classical learning frameworks, QGNNs, and data-driven control of quantum systems.",
    color: "blue-cyan",
  },
  {
    id: 2,
    title: "M.Sc. in Physics",
    institute: "IIT Kharagpur",
    duration: "2023 – 2025",
    logo: "/logos/iitkgp.png",
    description:
      "Completed my M.Sc. in Physics with specialization in quantum computing and quantum machine learning under Prof. Sonjoy Majumder. This phase strengthened my foundations in quantum information, machine learning, and computational physics.",
    color: "blue-cyan",
  },
  {
    id: 3,
    title: "B.Sc. in Physics",
    institute: "Chakdaha College, University of Kalyani",
    duration: "2020 – 2023",
    logo: "/logos/ku.webp",
    description:
      "Built strong foundations in classical and quantum physics while developing computational skills in Python and numerical modeling.",
    color: "purple-pink",
  },
  {
    id: 4,
    title: "Higher Secondary (Science)",
    institute: "WBCHSE",
    duration: "2018 – 2020",
    logo: "/logos/WBCHSE.png",
    description:
      "Developed strong aptitude in science and mathematics, laying the groundwork for pursuing physics academically.",
    color: "emerald-green",
  },
];

const Education = () => {
  const containerRef = useRef(null);

  useSEO({
    title: "Education | Sudipta Majumder",
    description:
      "Academic background and education timeline of Sudipta Majumder.",
  });

  return (
    <section id="education" className="education-section">
      <div className="education-wrapper" ref={containerRef}>
        <h2 className="education-title">Education</h2>

        <div className="education-list">
          {educationData.map((edu) => (
            <div key={edu.id} className="edu-card">

              {/* Logo Section */}
              <div className="edu-logo-container">
                <div className={`edu-logo ${edu.color}`}>
                  <img src={edu.logo} alt={edu.institute} className="edu-logo-img" />
                </div>
                <div className={`edu-connector ${edu.color}`}></div>
              </div>

              {/* Content */}
              <div className="edu-content">
                <div className="edu-header">
                  <h3 className="edu-title">{edu.title}</h3>
                  <span className="edu-duration">{edu.duration}</span>
                </div>

                <p className="edu-institute">{edu.institute}</p>

                <p className="edu-description">{edu.description}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
