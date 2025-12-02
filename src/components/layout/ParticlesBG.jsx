import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import React from "react";

export default function ParticlesBG() {
  const [ready, setReady] = useState(false);

  // Init engine (React 19 safe)
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => setReady(true));
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: -1, // background behind everything
      },

      background: { color: "#000000ff" }, // solid dark bg

      fpsLimit: 60,
      detectRetina: true,

      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          onClick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          repulse: { distance: 80, duration: 0.4 },
          push: { quantity: 3 },
        },
      },

      particles: {
        number: { value: 120, density: { enable: true, area: 800 } },

        // node color
        color: { value: "#919191ff" },

        // connecting lines between nodes
        links: {
          enable: true,
          distance: 130,
          color: "#777777ff",
          opacity: 0.3,
          width: 1,
        },

        shape: { type: "circle" },

        opacity: { value: 0.8 },

        size: { value: { min: 1, max: 4 } },

        move: {
          enable: true,
          speed: 0.5,
          direction: "none",
          random: false,
          straight: false,
          outModes: { default: "out" },
        },
      },
    }),
    []
  );

  if (!ready) return null;

  return <Particles id="tsparticles" options={options} />;
}
