import { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";
import Texture from "../../assets/images/TexturesCom_FloorMetalGrate_header9.jpg";
import { DoubleSide } from "three";
import { useEffect } from "react";

const SphereAnimation = ({ horizonSettings, sound }) => {
  const mesh = useRef();
  const analyzer = useRef();

  useEffect(() => {
    analyzer.current = new THREE.AudioAnalyser(sound.current, 128);
  }, [sound]);

  useFrame((state, delta) => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    if (analyzer.current) {
      let data = analyzer.current.getAverageFrequency();

      mesh.current.scale.x =
        mesh.current.scale.y =
        mesh.current.scale.z =
          (data / 100) * 2;
    }
  });
  const colourMap = useLoader(TextureLoader, Texture);

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[2, 60, 60]} />
      <meshBasicMaterial
        wireframe={true}
        side={DoubleSide}
        color={horizonSettings.animationColor}
      />
    </mesh>
  );
};

export default SphereAnimation;
