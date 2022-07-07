import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { DoubleSide } from "three";

const SphereAnimation = ({ horizonSettings, soundRefs, id }) => {
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
    // Analysing the frequency from the sounds

    arpAnalyser.current = new THREE.AudioAnalyser(arpSound.current, 128);
    pad1Analyser.current = new THREE.AudioAnalyser(padSound1.current, 128);
    pad2Analyser.current = new THREE.AudioAnalyser(padSound2.current, 128);
    lead1Analyser.current = new THREE.AudioAnalyser(leadSound1.current, 128);
    lead2Analyser.current = new THREE.AudioAnalyser(leadSound2.current, 128);
    lead3Analyser.current = new THREE.AudioAnalyser(leadSound3.current, 128);
    droneAnalyser.current = new THREE.AudioAnalyser(droneSound.current, 128);
    bassAnalyser.current = new THREE.AudioAnalyser(bassSound.current, 128);
  }, []);

  useFrame(() => {
    // Rotating the animation

    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;

    // Getting the average frequency.

    let arpFrequency = arpAnalyser.current.getAverageFrequency();
    let pad1Frequency = pad1Analyser.current.getAverageFrequency();
    let pad2Frequency = pad2Analyser.current.getAverageFrequency();
    let lead1Frequency = lead1Analyser.current.getAverageFrequency();
    let lead2Frequency = lead2Analyser.current.getAverageFrequency();
    let lead3Frequency = lead3Analyser.current.getAverageFrequency();
    let bassFrequency = bassAnalyser.current.getAverageFrequency();
    let droneFrequency = droneAnalyser.current.getAverageFrequency();

    // Distributing the frequencies to the axis of the animation.

    if (id === "1") {
      mesh.current.scale.x =
        mesh.current.scale.y =
        mesh.current.scale.z =
          pad1Frequency / 200 +
          arpFrequency / 300 +
          pad2Frequency / 200 +
          lead1Frequency / 200 +
          lead2Frequency / 200 +
          lead3Frequency / 200 +
          droneFrequency / 500 +
          bassFrequency / 200;
    }

    if (id === "2") {
      mesh.current.scale.x =
        mesh.current.scale.y =
        mesh.current.scale.z =
          pad1Frequency / 60 +
          arpFrequency / 60 +
          pad2Frequency / 60 +
          lead1Frequency / 60 +
          lead2Frequency / 50 +
          lead3Frequency / 50 +
          droneFrequency / 100 +
          bassFrequency / 100;
    }
  });

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
