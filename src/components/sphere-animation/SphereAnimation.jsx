import { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import Texture from "../../assets/images/TexturesCom_FloorMetalGrate_header9.jpg";
import { DoubleSide } from "three";

const SphereAnimation = () => {
  const mesh = useRef();

  // useFrame((state, delta) => {
  //   mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  // });
  const colourMap = useLoader(TextureLoader, Texture);

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[2, 60, 60]} />
      <meshBasicMaterial wireframe={true} side={DoubleSide} color="lightblue" />
    </mesh>
  );
};

export default SphereAnimation;
