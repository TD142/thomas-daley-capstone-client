import React from "react";
import { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import { DoubleSide } from "three";
import { MeshDistortMaterial } from "@react-three/drei";

const PlaneAnimation = ({ vortexSettings }) => {
  const mesh = useRef();

  useFrame((state, delta) => {
    mesh.current.rotation.y = 0;
  });

  return (
    <mesh rotation={[1.6, 1, 0]} ref={mesh}>
      <planeGeometry args={[10, 60, 60]} />
      <meshBasicMaterial
        wireframe={true}
        side={DoubleSide}
        color={vortexSettings.animationColor}
      />
    </mesh>
  );
};

export default PlaneAnimation;
