import { useRef, useEffect } from "react";
import { DoubleSide } from "three";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const CircleAnimation = ({ pulseSettings, soundRefs, id }) => {
  const [
    bassSound,
    padSound1,
    padSound2,
    leadSound1,
    leadSound2,
    leadSound3,
    droneSound,
    arpSound,
  ] = soundRefs;
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
    let bassFrequency = bassAnalyser.current.getAverageFrequency();
    let droneFrequency = droneAnalyser.current.getAverageFrequency();

    if (id === "1") {
      mesh.current.scale.x =
        mesh.current.scale.y =
        mesh.current.scale.z =
          pad1Frequency / 300 +
          arpFrequency / 300 +
          pad2Frequency / 300 +
          lead1Frequency / 300 +
          lead2Frequency / 300 +
          lead3Frequency / 300 +
          droneFrequency / 500 +
          bassFrequency / 300;
    }

    if (id === "2") {
      mesh.current.scale.x =
        mesh.current.scale.y =
        mesh.current.scale.z =
          pad1Frequency / 200 +
          arpFrequency / 300 +
          pad2Frequency / 200 +
          lead1Frequency / 200 +
          lead2Frequency / 200 +
          lead3Frequency / 200 +
          droneFrequency / 50 +
          bassFrequency / 200;
    }
  });

  return (
    <mesh ref={mesh}>
      <dodecahedronGeometry args={[2, 23, 40]} />
      <MeshDistortMaterial
        wireframe={true}
        side={DoubleSide}
        color={pulseSettings.animationColor}
      />
    </mesh>
  );
};

export default CircleAnimation;
