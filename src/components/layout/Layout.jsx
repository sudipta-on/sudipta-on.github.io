import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ParticlesBG from "./ParticlesBG";

export default function Layout({ children }) {
  return (
    <div className="app-container min-h-screen flex flex-col relative text-white overflow-hidden">
      
      {/* Background */}
      <ParticlesBG />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="main-content flex-1 pt-20 px-4 relative z-10">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}