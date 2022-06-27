import { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import { DoubleSide } from "three";

const BoxAnimation = () => {
  const mesh = useRef();

  useFrame((state, delta) => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2, 60, 60]} />
      <meshBasicMaterial wireframe={true} side={DoubleSide} color="lightblue" />
    </mesh>
  );
};

export default BoxAnimation;
