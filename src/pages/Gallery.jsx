// src/pages/Gallery.jsx
import React, { useState, useEffect } from "react";
import { galleryPhotos } from "./galleryPhotos";

export default function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    const sorted = [...galleryPhotos].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setPhotos(sorted);
  }, []);

  const nextPhoto = () => setCurrentIndex((prev) => (prev + 1) % photos.length);
  const prevPhoto = () =>
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);

  useEffect(() => {
    const handle = (e) => {
      if (currentIndex === null) return;
      if (e.key === "ArrowRight") nextPhoto();
      if (e.key === "ArrowLeft") prevPhoto();
      if (e.key === "Escape") setCurrentIndex(null);
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [currentIndex]);

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Gallery</h2>

      {/* Masonry */}
      <div className="gallery-masonry">
        {photos.map((p, idx) => (
          <div
            key={p.id}
            className="gallery-item"
            onClick={() => setCurrentIndex(idx)}
          >
            <img
              src={p.src}
              alt={p.title}
              className="gallery-image"
            />
          </div>
        ))}
      </div>

      {/* FULLSCREEN VIEWER */}
      {currentIndex !== null && (
        <div className="viewer-overlay">

          <button onClick={() => setCurrentIndex(null)} className="viewer-close">✕</button>

          <button onClick={prevPhoto} className="viewer-left">❮</button>

          <div className="viewer-content">
            <img
              src={photos[currentIndex].src}
              className="viewer-photo"
            />
            <h3 className="viewer-title">{photos[currentIndex].title}</h3>
            <p className="viewer-tags">
              Tags: {photos[currentIndex].tags.join(", ")}
            </p>
          </div>

          <button onClick={nextPhoto} className="viewer-right">❯</button>
        </div>
      )}
    </section>
  );
}
