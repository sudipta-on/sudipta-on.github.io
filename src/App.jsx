import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Home from "./pages/Home/Home";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Publications from "./pages/Publications";
import Gallery from "./pages/Gallery";
import GameZone from "./pages/GameZone";
import Contact from "./pages/Contact";
import AnalyticsTracker from "./AnalyticsTracker";


export default function App() {
  return (
    <>
      <AnalyticsTracker />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/game-zone" element={<GameZone />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </>
  );
}
