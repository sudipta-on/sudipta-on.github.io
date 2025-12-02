import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import React from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar ${scrolled ? "navbar-scrolled" : "navbar-top"}`}
    >
      {/* Logo */}
      <div className="navbar-logo"></div>

      {/* Title */}
      <h1 className="navbar-title">Sudipta Majumder</h1>

      {/* Desktop Menu */}
      <ul className="navbar-menu">
        <NavButton to="/">Home</NavButton>
        <NavButton to="/education">Education</NavButton>
        <NavButton to="/experience">Experience</NavButton>
        <NavButton to="/publications">Publications</NavButton>
        <NavButton to="/gallery">Gallery</NavButton>
        <NavButton to="/game-zone">Game Zone</NavButton>
        <NavButton to="/contact">Contact</NavButton>
      </ul>

      {/* Mobile Toggle Button */}
      <button className="navbar-mobile-toggle" onClick={() => setOpen(!open)}>
        {open ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <div className="navbar-mobile-menu">
          <NavButtonMobile to="/" setOpen={setOpen}>Home</NavButtonMobile>
          <NavButtonMobile to="/education" setOpen={setOpen}>Education</NavButtonMobile>
          <NavButtonMobile to="/experience" setOpen={setOpen}>Experience</NavButtonMobile>
          <NavButtonMobile to="/publications" setOpen={setOpen}>Publications</NavButtonMobile>
          <NavButtonMobile to="/gallery" setOpen={setOpen}>Gallery</NavButtonMobile>
          <NavButtonMobile to="/game-zone" setOpen={setOpen}>Game Zone</NavButtonMobile>
          <NavButtonMobile to="/contact" setOpen={setOpen}>Contact</NavButtonMobile>
        </div>
      )}
    </nav>
  );
}

/* ---------------------------
   Desktop Nav Button
----------------------------- */
function NavButton({ to, children }) {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <div className={`nav-btn ${isActive ? "nav-active" : "nav-inactive"}`}>
          {children}
          <span className={`nav-underline ${isActive ? "underline-active" : ""}`}></span>
        </div>
      )}
    </NavLink>
  );
}

/* ---------------------------
   Mobile Nav Button
----------------------------- */
function NavButtonMobile({ to, children, setOpen }) {
  return (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        isActive ? "mobile-nav-btn mobile-active" : "mobile-nav-btn"
      }
    >
      {children}
    </NavLink>
  );
}
