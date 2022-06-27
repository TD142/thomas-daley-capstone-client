import { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import { DoubleSide } from "three";
import { MeshDistortMaterial } from "@react-three/drei";

const CircleAnimation = () => {
  const mesh = useRef();

  //   useFrame((state, delta) => {
  //     mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  //   });

  return (
    <mesh ref={mesh}>
      <dodecahedronGeometry args={[2, 23, 40]} />
      <MeshDistortMaterial
        wireframe={true}
        side={DoubleSide}
        color="lightblue"
      />
    </mesh>
  );
};

export default CircleAnimation;
