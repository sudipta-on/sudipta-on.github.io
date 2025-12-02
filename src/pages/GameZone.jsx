// src/pages/GameZone.jsx
import React from "react";
import useSEO from "../hooks/useSEO";

export default function GameZone() {
  useSEO({
    title: "Game Zone | Sudipta Majumder",
    description: "Play mini games created by Sudipta Majumder.",
  });

  const games = [
    
    {
      title: "Tic Tac Toe",
      desc: "Classic brain game vs AI or friend.",
      img: "/qgames/tic_tac_toe.png",
      link: "https://game-zone-self.vercel.app/tic-tac-toe",
    },
    {
      title: "Quantum Tetris",
      desc: "Classical Tetris game with adaption of Quantum Uncertainity.",
      img: "/qgames/q_tetris.png",
      link: "https://game-zone-self.vercel.app/qtetris",
    },
    {
      title: "Flappy Bird",
      desc: "A simple flying game with smooth controls.",
      img: "/qgames/flappy_bird.png",
      link: "https://game-zone-self.vercel.app/flappy",
    },
  ];

  return (
    <section className="game-zone">
      {/* Page Heading */}
      <h2 className="game-title">Game Zone</h2>

      {/* Game Cards */}
      <div className="game-grid">
        {games.map((game, idx) => (
          <a
            key={idx}
            href={game.link}
            target="_blank"
            rel="noopener noreferrer"
            className="game-card"
          >
            <div className="game-thumb">
              <img src={game.img} alt={game.title} />
            </div>

            <h3 className="game-name">{game.title}</h3>
            <p className="game-desc">{game.desc}</p>
          </a>
        ))}
      </div>

      {/* Coming Soon Text */}
      <div className="coming-soon-box">
        <p className="coming-soon-text">✨ More games coming soon… ✨</p>
      </div>
    </section>
  );
}
