import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaGraduationCap } from "react-icons/fa6";
import { SiResearchgate } from "react-icons/si";
import useSEO from "../../hooks/useSEO";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  useSEO({
    title: "Home | Sudipta Majumder",
    description:
      "Sudipta Majumder — Quantum Machine Learning, Quantum State Control, QML research portfolio. IIT Kharagpur.",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        opacity: 0,
        x: -60,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(".hero-image", {
        opacity: 0,
        scale: 0.8,
        duration: 1.3,
        delay: 0.2,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="hero-section" ref={heroRef}>
      <div className="hero-container">

        {/* LEFT TEXT */}
        <div className="hero-text">
          <p className="hero-hello">Hello, it's me </p>

          <h1 className="hero-title">
            <span className="name-gradient">Sudipta Majumder</span>
          </h1>

          <h2 className="hero-subtitle">
            And I'm a{" "}
            <Typewriter
              options={{
                strings: [
                  "Quantum Enthusiast",
                  "QML Researcher",
                  "Schrödinger Coder",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>

          <p className="hero-description">
            A passionate researcher working on Quantum Computing, Quantum
            Machine Learning and Quantum Graph Machine Learning at IIT
            Kharagpur. Exploring new techniques to bridge Quantum Computing and
            Machine Learning.
          </p>

          {/* SOCIAL ICONS */}
          <div className="hero-icons">
            <a href="https://github.com/sudipta-on" target="_blank">
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sudipta-majumder/"
              target="_blank"
            >
              <FaLinkedin />
            </a>

            <a href="https://scholar.google.com" target="_blank">
              <FaGraduationCap />
            </a>

            <a
              href="https://www.researchgate.net/profile/Sudipta-Majumder-3"
              target="_blank"
            >
              <SiResearchgate />
            </a>
          </div>

          {/* BUTTONS */}
          <a href="/contact" className="hero-button">
            Get in Touch
          </a>

          <a href="/" className="hero-button hero-button-space">
            Open CV
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-image">
          <div className="image-glow-border">
            <div className="image-container">
              <img
                src="/profile.png"
                alt="Sudipta Majumder"
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
