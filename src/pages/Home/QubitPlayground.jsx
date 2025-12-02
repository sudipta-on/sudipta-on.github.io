import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Sphere = () => {
  const sphereRef = useRef();
  const arrowRef = useRef();
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.004;
    }
  });

  useEffect(() => {
    gsap.fromTo(
      groupRef.current.scale,
      { x: 0, y: 0, z: 0 },
      {
        x: 1,
        y: 1,
        z: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#bloch-container',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  const handleSphereClick = () => {
    const newDir = new THREE.Vector3(
      Math.random() * 2 - 1,
      Math.random() * 2 - 1,
      Math.random() * 2 - 1
    ).normalize();

    if (arrowRef.current) {
      const oldDir = arrowRef.current.getDirection(new THREE.Vector3());
      const obj = { t: 0 };

      gsap.to(obj, {
        t: 1,
        duration: 1.2,
        ease: 'power3.out',
        onUpdate: () => {
          const lerped = new THREE.Vector3().lerpVectors(oldDir, newDir, obj.t);
          arrowRef.current.setDirection(lerped);
        },
      });
    }

    gsap.fromTo(
      groupRef.current.scale,
      { x: 1, y: 1, z: 1 },
      {
        x: 1.1,
        y: 1.1,
        z: 1.1,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: 'power2.out',
      }
    );
  };

  return (
    <group ref={groupRef} onClick={handleSphereClick} className="cursor-pointer">
      <mesh ref={sphereRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial 
          color="#5530ff"
          wireframe
          transparent
          opacity={0.5}
        />
      </mesh>

      <arrowHelper
        ref={arrowRef}
        args={[new THREE.Vector3(0.5, 0.7, 0.5).normalize(), new THREE.Vector3(0, 0, 0), 1.1, '#00ffff']}
      />

      <arrowHelper args={[new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, 0, 0), 1.2, '#ff5555']} />
      <arrowHelper args={[new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 0), 1.2, '#55ff55']} />
      <arrowHelper args={[new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, 0), 1.2, '#5555ff']} />

      <Html position={[1.3, 0, 0]} center className="html-label html-red">X</Html>
      <Html position={[0, 1.3, 0]} center className="html-label html-green">Y</Html>
      <Html position={[0, 0, 1.3]} center className="html-label html-blue">Z</Html>

      <Html position={[0, -1.4, 0]} center className="html-state">
        |ψ⟩ = cos(θ/2)|0⟩ + e<sup>iϕ</sup>sin(θ/2)|1⟩
      </Html>
    </group>
  );
};

export default function BlochSphere() {
  return (
    <div id="bloch-container" className="bloch-wrapper">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        <Sphere />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
