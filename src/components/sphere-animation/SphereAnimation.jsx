import { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";
import Texture from "../../assets/images/TexturesCom_FloorMetalGrate_header9.jpg";
import { DoubleSide } from "three";
import { useEffect } from "react";

const SphereAnimation = ({
  horizonSettings,
  arpSound,
  padSound1,
  padSound2,
  leadSound1,
  leadSound2,
  leadSound3,
  droneSound,
  bassSound,
}) => {
  const mesh = useRef();
  const arpAnalyser = useRef();
  const pad1Analyser = useRef();
  const pad2Analyser = useRef();
  const lead1Analyser = useRef();
  const lead2Analyser = useRef();
  const lead3Analyser = useRef();
  const droneAnalyser = useRef();
  const bassAnalyser = useRef();

  useEffect(() => {
    arpAnalyser.current = new THREE.AudioAnalyser(arpSound.current, 128);
    pad1Analyser.current = new THREE.AudioAnalyser(padSound1.current, 128);
    pad2Analyser.current = new THREE.AudioAnalyser(padSound2.current, 128);
    lead1Analyser.current = new THREE.AudioAnalyser(leadSound1.current, 128);
    lead2Analyser.current = new THREE.AudioAnalyser(leadSound2.current, 128);
    lead3Analyser.current = new THREE.AudioAnalyser(leadSound3.current, 128);
    droneAnalyser.current = new THREE.AudioAnalyser(droneSound.current, 128);
    bassAnalyser.current = new THREE.AudioAnalyser(bassSound.current, 128);
  }, []);

  useFrame((state, delta) => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;

    let arpFrequency = arpAnalyser.current.getAverageFrequency();
    let pad1Frequency = pad1Analyser.current.getAverageFrequency();
    let pad2Frequency = pad2Analyser.current.getAverageFrequency();
    let lead1Frequency = lead1Analyser.current.getAverageFrequency();
    let lead2Frequency = lead2Analyser.current.getAverageFrequency();
    let lead3Frequency = lead3Analyser.current.getAverageFrequency();
    let bassFrequency = lead3Analyser.current.getAverageFrequency();
    let droneFrequency = droneAnalyser.current.getAverageFrequency();

    mesh.current.scale.x =
      mesh.current.scale.y =
      mesh.current.scale.z =
        pad1Frequency / 200 +
        arpFrequency / 300 +
        pad2Frequency / 200 +
        lead1Frequency / 200 +
        lead2Frequency / 500 +
        lead3Frequency / 200 +
        droneFrequency / 500 +
        bassFrequency / 200;
    console.log(mesh.current);
  });
  const colourMap = useLoader(TextureLoader, Texture);

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[1.5, 60, 60]} />
      <meshBasicMaterial
        wireframe={true}
        side={DoubleSide}
        color={horizonSettings.animationColor}
      />
    </mesh>
  );
};

export default SphereAnimation;
