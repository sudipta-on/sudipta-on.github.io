import { FaGithub, FaLinkedin, FaGoogleScholar } from "react-icons/fa6";
import { SiResearchgate } from "react-icons/si";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* LEFT */}
        <div className="footer-left">
          <p className="footer-year">
            © {new Date().getFullYear()} Sudipta Majumder
          </p>
          <p className="footer-subtitle">
            Quantum Information • Quantum Machine Learning
          </p>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <span className="footer-follow">Follow me on:</span>

          <div className="footer-icons">
            <a href="https://github.com/sudipta-on" target="_blank" className="footer-icon"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/sudipta-majumder/" target="_blank" className="footer-icon"><FaLinkedin /></a>
            <a href="https://scholar.google.com" target="_blank" className="footer-icon"><FaGoogleScholar /></a>
            <a href="https://www.researchgate.net/profile/Sudipta-Majumder-3" target="_blank" className="footer-icon"><SiResearchgate /></a>
          </div>
        </div>

      </div>
    </footer>
  );
}
