import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ParticlesBG from "./ParticlesBG";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen relative text-white overflow-hidden">

      {/* Particle Network Background */}
      <ParticlesBG />

      {/* Floating Glass Navbar */}
      <Navbar />

      <main className="flex-1 pt-20 px-4 relative z-10">
        {children}
      </main>

      <Footer />
    </div>
  );
}
