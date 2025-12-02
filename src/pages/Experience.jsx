import React from "react";
import FlipCard from "./FlipCard";
import useSEO from "../hooks/useSEO";

const internships = [
  {
    title: "Research Intern",
    subtitle: "IISER Bhopal • Summer 2024",
    shortDesc: "Explored Quantum Many-Body Physics using NetKet",
    backDescription:
      "Worked on Quantum Monte Carlo simulations, Neural Quantum States (NQS), and ground-state approximations using NetKet.",
    link: "https://drive.google.com/file/d/1Kn4iohZ3EIMQp9ydTvgwjcaD8wV-rNM0/view?usp=sharing",
    linkText: "Report",
  },
];

const conferences = [
  {
    title: "Qiskit Fall Fest 2025",
    subtitle: "IISc Bangalore • 2025",
    shortDesc:
      "Hands-on quantum programming experience through the Qiskit Fall Fest 2025 at IISc Bangalore.",
    backDescription:
      "Engaged in expert-guided exploration of Qiskit 2.0, complemented by practical sessions.",
  },
  {
    title: "Familiarisation Workshop on Quantum Computing",
    subtitle: "IISc Bengaluru • 2025",
    shortDesc:
      "Participated in Workshop on Quantum Computing organised by IISc Bengaluru.",
    backDescription:
      "Explored expert-led lectures covering core quantum concepts and emerging applications.",
  },
  {
    title: "Qiskit Fall Fest 2024",
    subtitle: "BITS Goa • 2024",
    shortDesc:
      "Participated the Workshop organized by BITS Goa in collaboration with IBM Quantum.",
    backDescription:
      "Worked with Qiskit Runtime to build a quantum workflow mini-project. And awarded Runner-up prize for Hackathon.",
  },
];

const certifications = [
  {
    title: "Qiskit Global Summer School 2025",
    subtitle: "IBM • 2025",
    shortDesc:
      "Participated in the QGSS 2025 hosted by IBM Quantum.",
    backDescription:
      "Learned advanced QC concepts like circuit optimization and Qiskit Runtime primitives.",
    link: "https://www.credly.com/badges/c760a343-8f15-4c89-ae74-2f9f010d5c2a/public_url",
    linkText: "Certificate",
  },
  {
    title: "Machine Learning",
    subtitle: "DeepLearning.AI • 2024",
    shortDesc: "Completed ML specialization offered by Andrew Ng. ",
    backDescription:
      "Covered supervised learning, decision trees, ensembles & neural networks.",
    link: "https://coursera.org/share/3536ff1011cb6b99e1d81cc41fc03f11",
    linkText: "Certificate",
  },
  {
    title: "Crash Course on Python",
    subtitle: "Google • 2023",
    shortDesc: "Completed Python course offered by Google in Coursera.",
    backDescription:
      "Learned functions, loops, conditionals, debugging & automation.",
    link: "https://coursera.org/share/50d63b62fa6574ddb32af66436cb5439",
    linkText: "Certificate",
  },
];

// ⭐ Reusable Section Block
const SectionBlock = ({ title, list }) => (
  <div className="exp-section-block">
    <h3 className="exp-subtitle">{title}</h3>

    <div className="exp-card-row">
      {list.map((exp, idx) => (
        <FlipCard key={idx} {...exp} />
      ))}
    </div>
  </div>
);

export default function Experience() {
  useSEO({
    title: "Experience | Sudipta Majumder",
    description:
      "Internships, teaching roles, workshops, conferences, and certifications.",
  });

  return (
    <section id="experience" className="experience-section">
      {/* Main Title */}
      <h2 className="experience-title">Experience</h2>

      {/* Blocks */}
      <SectionBlock title="Internships & Projects" list={internships} />
      <SectionBlock title="Conferences, Workshops & Seminars" list={conferences} />
      <SectionBlock title="Certifications & Training" list={certifications} />
    </section>
  );
}
