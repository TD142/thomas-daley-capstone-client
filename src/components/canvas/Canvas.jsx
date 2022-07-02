import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import SphereAnimation from "../sphere-animation/SphereAnimation.jsx";
import { OrbitControls } from "@react-three/drei";
import "./Canvas.scss";
import { Suspense } from "react";
import BoxAnimation from "../box-animation/BoxAnimation.jsx";
import CircleAnimation from "../circle-animation/CircleAnimation.jsx";
import { useState } from "react";
import PlaneAnimation from "../plane-animation/PlaneAnimation.jsx";
import TorusAnimation from "../torus-animation/TorusAnimation.jsx";
import { PositionalAudio } from "@react-three/drei";
import Sampler from "../sampler/Sampler.jsx";
import OceanAnimation from "../ocean-animation/OceanAnimation.jsx";

import DatGui, { DatColor } from "react-dat-gui";

const Scene = ({ sounds, handleSoundChange }) => {
  const [currentAnimation, setCurrentAnimation] = useState("Horizon");
  const [horizonSettings, setHorizonSettings] = useState({
    animationColor: "#8b0000",
  });
  const [pulseSettings, setPulseSettings] = useState({
    animationColor: "#ADD8E6",
  });
  const [vortexSettings, setVortexSettings] = useState({
    animationColor: "#4DBEBE",
  });

  const bassSound = useRef();
  const padSound1 = useRef();
  const padSound2 = useRef();
  const leadSound1 = useRef();
  const leadSound2 = useRef();
  const leadSound3 = useRef();
  const droneSound = useRef();
  const arpSound = useRef();

  const triggerAudio = (event, sound) => {
    if (sound.current.isPlaying === false) {
      sound.current.gain.gain.value = 1;

      sound.current.play();
      event.target.classList.add("sampler__trigger--playing");
    } else {
      const fadeAudio = setInterval(() => {
        if (sound.current.gain.gain.value > 0) {
          sound.current.gain.gain.value -= 0.1;
          event.target.classList.add("sampler__trigger--fading");
        }

        if (sound.current.gain.gain.value < 0.003) {
          clearInterval(fadeAudio);
          event.target.classList.remove("sampler__trigger--playing");
          event.target.classList.remove("sampler__trigger--fading");
          sound.current.stop();
        }
      }, 200);
    }
  };

  const handleChange = async (event) => {
    setCurrentAnimation(event.target.value);
  };

  const handleBankChange = () => {
    if (bassSound.current.isPlaying) {
      bassSound.current.stop();
    }

    if (padSound1.current.isPlaying) {
      padSound1.current.stop();
    }

    if (padSound2.current.isPlaying) {
      padSound2.current.stop();
    }

    if (leadSound1.current.isPlaying) {
      leadSound1.current.stop();
    }

    if (leadSound2.current.isPlaying) {
      leadSound2.current.stop();
    }
    if (leadSound3.current.isPlaying) {
      leadSound3.current.stop();
    }
    if (droneSound.current.isPlaying) {
      droneSound.current.stop();
    }
    if (arpSound.current.isPlaying) {
      arpSound.current.stop();
    }

    const button = document.querySelectorAll("button");

    button.forEach((item) => {
      console.log(item.className);
      if (item.className === "sampler__trigger sampler__trigger--playing")
        item.classList.remove("sampler__trigger--playing");
    });
  };

  return (
    <div>
      {currentAnimation === "Horizon" ? (
        <DatGui data={horizonSettings} onUpdate={setHorizonSettings}>
          <DatColor path="animationColor" label="animationColor"></DatColor>
        </DatGui>
      ) : null}
      {currentAnimation === "Pulse" ? (
        <DatGui data={pulseSettings} onUpdate={setPulseSettings}>
          <DatColor path="animationColor" label="animationColor"></DatColor>
        </DatGui>
      ) : null}
      {currentAnimation === "Vortex" ? (
        <DatGui data={vortexSettings} onUpdate={setVortexSettings}>
          <DatColor path="animationColor" label="animationColor"></DatColor>
        </DatGui>
      ) : null}
      <div className="animation-dropdown__container">
        <select className="animation-dropdown" onChange={handleChange}>
          <option value="Horizon">Horizon</option>
          <option value="Pulse">Pulse</option>
          <option value="Vortex">Vortex</option>
        </select>
      </div>
      <div className="canvas">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 10, 2]} intensity={0.5} />
          <Suspense fallback={null}>
            <PositionalAudio
              url={sounds.arp}
              distance={10}
              loop
              ref={arpSound}
            />
            <PositionalAudio
              url={sounds.bass}
              distance={10}
              loop
              ref={bassSound}
            />
            <PositionalAudio
              url={sounds.pad1}
              distance={10}
              loop
              ref={padSound1}
            />
            <PositionalAudio
              url={sounds.pad2}
              distance={10}
              loop
              ref={padSound2}
            />
            <PositionalAudio
              url={sounds.lead1}
              distance={10}
              loop
              ref={leadSound1}
            />
            <PositionalAudio
              url={sounds.lead2}
              distance={10}
              loop
              ref={leadSound2}
            />
            <PositionalAudio
              url={sounds.lead3}
              distance={10}
              loop
              ref={leadSound3}
            />
            <PositionalAudio
              url={sounds.drone}
              distance={10}
              loop
              ref={droneSound}
            />
            {currentAnimation === "Horizon" ? (
              <>
                <SphereAnimation
                  arpSound={arpSound}
                  padSound1={padSound1}
                  bassSound={bassSound}
                  padSound2={padSound2}
                  leadSound1={leadSound1}
                  leadSound2={leadSound2}
                  leadSound3={leadSound3}
                  droneSound={droneSound}
                  id={sounds.id}
                  horizonSettings={horizonSettings}
                />
                <BoxAnimation />
              </>
            ) : (
              <></>
            )}
            {currentAnimation === "Pulse" ? (
              <>
                <CircleAnimation
                  arpSound={arpSound}
                  padSound1={padSound1}
                  bassSound={bassSound}
                  padSound2={padSound2}
                  leadSound1={leadSound1}
                  leadSound2={leadSound2}
                  leadSound3={leadSound3}
                  droneSound={droneSound}
                  pulseSettings={pulseSettings}
                  id={sounds.id}
                />

                <OceanAnimation />
              </>
            ) : (
              <></>
            )}
            {currentAnimation === "Vortex" ? (
              <>
                <PlaneAnimation
                  arpSound={arpSound}
                  padSound1={padSound1}
                  bassSound={bassSound}
                  padSound2={padSound2}
                  leadSound1={leadSound1}
                  leadSound2={leadSound2}
                  leadSound3={leadSound3}
                  droneSound={droneSound}
                  vortexSettings={vortexSettings}
                />
                <TorusAnimation />
              </>
            ) : (
              <></>
            )}
          </Suspense>
        </Canvas>
      </div>
      <Sampler
        triggerAudio={triggerAudio}
        handleSoundChange={handleSoundChange}
        handleBankChange={handleBankChange}
        arpSound={arpSound}
        bassSound={bassSound}
        padSound1={padSound1}
        padSound2={padSound2}
        leadSound1={leadSound1}
        leadSound2={leadSound2}
        leadSound3={leadSound3}
        droneSound={droneSound}
      />
    </div>
  );
};

export default Scene;
