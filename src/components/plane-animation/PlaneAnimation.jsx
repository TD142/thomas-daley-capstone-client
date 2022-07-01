import React from "react";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { DoubleSide } from "three";
import * as THREE from "three";
import { useEffect } from "react";

const PlaneAnimation = ({
  vortexSettings,
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
    mesh.current.rotation.y = 0;
    let arpFrequency = arpAnalyser.current.getAverageFrequency();
    let pad1Frequency = pad1Analyser.current.getAverageFrequency();
    let pad2Frequency = pad2Analyser.current.getAverageFrequency();
    let lead1Frequency = lead1Analyser.current.getAverageFrequency();
    let lead2Frequency = lead2Analyser.current.getAverageFrequency();
    let lead3Frequency = lead3Analyser.current.getAverageFrequency();
    let bassFrequency = bassAnalyser.current.getAverageFrequency();
    let droneFrequency = droneAnalyser.current.getAverageFrequency();

    mesh.current.position.z =
      pad1Frequency / 200 +
      arpFrequency / 100 +
      pad2Frequency / 200 +
      lead1Frequency / 200 +
      lead2Frequency / 200 +
      lead3Frequency / 200 +
      droneFrequency / 200 +
      bassFrequency / 200;

    // mesh.current.material.color.setRGB(
    //   arpFrequency / 100,
    //   0,
    //   0 + bassFrequency / 20,
    //   0,
    //   0 + pad1Frequency / 100,
    //   0,
    //   0
    //   // 0 + pad2Frequency * 100,
    //   // 0,
    //   // 0 + lead1Frequency * 500,
    //   // 0,
    //   // 0 + lead2Frequency / 20,
    //   // 0,
    //   // 0 + lead3Frequency / 20,
    //   // 0,
    //   // 0 + droneFrequency ,
    //   // 0,
    //   // 0 + bassFrequency / 20,
    //   // 0,
    //   // 0
    // );
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
