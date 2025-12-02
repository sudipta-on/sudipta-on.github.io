import useSEO from "../../hooks/useSEO";
import Hero from "./Hero";
import About from "./About";
import ResearchInterests from "./ResearchInterests";
import React from "react";

export default function Home() {
  useSEO({
    title: "Home | Sudipta Majumder",
    description: "Quantum Information, Quantum Computing, QML portfolio site.",
    keywords: "quantum computing, qml, bec, amqi",
  });

  return (
    <div className="space-y-20">
      <Hero />
      <About />
      <ResearchInterests />
    </div>
  );
}
