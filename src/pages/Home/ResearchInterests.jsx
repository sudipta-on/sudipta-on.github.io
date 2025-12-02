import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useSEO from "../../hooks/useSEO";
import QubitPlayground from "./QubitPlayground";

gsap.registerPlugin(ScrollTrigger);

const interests = [
  {
    title: "Quantum Machine Learning",
    icon: "🧠",
    desc: "Designing hybrid learning models that integrate quantum circuits with classical neural architectures, focusing on quantum kernels, expressive ansätze, and learning from structured quantum data.",
  },
  {
    title: "Quantum Control & Reinforcement Learning",
    icon: "🎯",
    desc: "Applying deep reinforcement learning to optimize quantum state preparation, pulse shaping, real-time control, and stabilisation of open quantum systems under measurement-based feedback.",
  },
  {
    title: "Quantum Graph Neural Networks",
    icon: "⚛️",
    desc: "Exploring graph-based quantum learning frameworks for representing many-body systems, quantum circuits, and relational quantum data using QGNNs, message-passing models, and graph-based quantum kernels.",
  },
  {
    title: "Interactive Quantum Visualization Platforms",
    icon: "🧩",
    desc: "Building intuitive, interactive 3D tools that visualize qubit states, Bloch-sphere dynamics, quantum evolution, and algorithmic flows for research, teaching, and public engagement.",
  },
];

const ResearchInterests = () => {
  const sectionRef = useRef(null);

  useSEO({
    title: "Research Interests | Sudipta Majumder",
    description:
      "Research interests of Sudipta Majumder in Quantum Machine Learning, Quantum Control, Quantum Chemistry, and Interactive Quantum Technologies.",
  });

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".interest-card");

    gsap.fromTo(
      cards,
      { opacity: 0, y: 60, rotateY: 20 },
      {
        opacity: 1,
        y: 0,
        rotateY: 0,
        duration: 1.1,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section id="research" ref={sectionRef} className="research-section">
      <h2 className="research-title">
        <span className="research-title-gradient">Research </span>Interests
      </h2>

      <div className="research-container">
        <div className="research-left">
          <QubitPlayground />
        </div>

        <div className="research-right">
          {interests.map((item, idx) => (
            <div key={idx} className="interest-card">
              <div className="interest-header">
                <div className="interest-icon">{item.icon}</div>
                <h3 className="interest-name">{item.title}</h3>
              </div>
              <p className="interest-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchInterests;
