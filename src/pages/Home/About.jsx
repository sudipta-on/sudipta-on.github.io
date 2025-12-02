import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const el = aboutRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section id="about">
      <div ref={aboutRef} className="about-card">

        <h2 className="about-title">
          <span className="about-title-gradient">About</span> Me
        </h2>

        {/* DESCRIPTION */}
        <div>
          <p className="about-description">
            I’m <span className="text-purple">Sudipta Majumder</span>, a CSIR Research
            Fellow in the Department of Physics at
            <span className="text-blue"> IIT Kharagpur</span>, working under the supervision
            of <span className="text-cyan">Prof. Sonjoy Majumder</span>.
          </p>

          <p className="about-description">
            My research lies at the intersection of 
            <span className="text-cyan"> Quantum Computing</span> and
            <span className="text-purple"> Machine Learning</span>,
            with a particular focus on 
            <span className="text-green"> Quantum Graph Neural Networks (QGNNs)</span> and
            <span className="text-green"> Quantum–Classical Hybrid learning models</span>.
          </p>

          <p className="about-description">
            I work on designing intelligent quantum algorithms, developing
            physics-informed learning methods, and exploring how structured data,
            entanglement, and optimization can improve quantum machine learning performance.
          </p>

          <p className="about-description">
            Broadly, I aim to build scalable quantum learning tools for
            applications in quantum state control, quantum chemistry, open quantum
            systems, and next-generation AI-assisted quantum technologies.
          </p>
        </div>

        {/* SKILLS */}
        <div className="skills-wrapper" style={{ marginTop: "24px" }}>
          <h3 className="skills-title">
            <span className="skills-title-gradient">Core</span> Skills
          </h3>

          <div>
            {[
              "Python",
              "Qiskit",
              "QuTiP",
              "Reinforcement Learning",
              "Graph Neural Networks",
            ].map((skill, idx) => (
              <span key={idx} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
