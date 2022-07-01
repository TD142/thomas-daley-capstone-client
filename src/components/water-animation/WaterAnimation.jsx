import { useLoader } from "@react-three/fiber";
import { DoubleSide } from "three";
import { TextureLoader } from "three";
import Texture from "../../assets/images/water.jpeg";
import { MeshDistortMaterial } from "@react-three/drei";

const WaterAnimation = () => {
  const colorMap = useLoader(TextureLoader, Texture);

  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshBasicMaterial map={colorMap} side={DoubleSide} />
    </mesh>
  );
};

export default WaterAnimation;
