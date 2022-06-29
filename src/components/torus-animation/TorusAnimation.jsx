import React from "react";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { DoubleSide } from "three";
import { Float, Sparkles } from "@react-three/drei";

const TorusAnimation = () => {
  const mesh = useRef();

  useFrame((state, delta) => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.0004;
  });

  return (
    <mesh ref={mesh}>
      <torusKnotGeometry args={[1, 120, 10]} />
      <meshBasicMaterial wireframe={true} side={DoubleSide} color="lightblue" />
    </mesh>
  );
};

export default TorusAnimation;
