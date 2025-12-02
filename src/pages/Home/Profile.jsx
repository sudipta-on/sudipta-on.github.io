import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls, RoundedBox, useTexture } from "@react-three/drei";

function RotatingProfile({ img }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  const texture = useTexture(img);

  return (
    <RoundedBox
      ref={meshRef}
      args={[2.5, 3.5, 0.2]}
      radius={0.2}
      smoothness={4}
    >
      <meshStandardMaterial map={texture} />
    </RoundedBox>
  );
}

export default function Profile() {
  return (
    <div className="profile-3d-container">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[4, 4, 4]} intensity={1.5} />
        <RotatingProfile img="/src/assets/picofme.png" />

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
