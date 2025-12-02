// components/FlipCard.jsx
import React, { useState } from "react";

const FlipCard = ({ title, subtitle, shortDesc, backDescription, link, linkText }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="flip-card"
      onClick={() => setFlipped(!flipped)}
    >
      <div className={`flip-inner ${flipped ? "flipped" : ""}`}>
        
        {/* FRONT */}
        <div className="flip-front">
          <h3 className="flip-title">{title}</h3>
          <p className="flip-subtitle">{subtitle}</p>

          <p className="flip-shortdesc">{shortDesc}</p>

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flip-link"
            >
              {linkText ? linkText : "PDF"}
            </a>
          )}
        </div>

        {/* BACK */}
        <div className="flip-back">
          <h4 className="flip-details-title">Details</h4>
          <p className="flip-backdesc">{backDescription}</p>
        </div>

      </div>
    </div>
  );
};

export default FlipCard;
