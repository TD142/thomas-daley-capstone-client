import React from "react";
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

import DatGui, { DatColor } from "react-dat-gui";

const Scene = () => {
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

  const handleChange = async (event) => {
    setCurrentAnimation(event.target.value);
  };

  return (
    <div>
      {currentAnimation === "Horizon" ? (
        <DatGui data={horizonSettings} onUpdate={setHorizonSettings}>
          <DatColor path="animationColor" label="animationColor"></DatColor>
        </DatGui>
      ) : (
        <div>loading...</div>
      )}
      {currentAnimation === "Pulse" ? (
        <DatGui data={pulseSettings} onUpdate={setPulseSettings}>
          <DatColor path="animationColor" label="animationColor"></DatColor>
        </DatGui>
      ) : (
        <div>loading...</div>
      )}
      {currentAnimation === "Vortex" ? (
        <DatGui data={vortexSettings} onUpdate={setVortexSettings}>
          <DatColor path="animationColor" label="animationColor"></DatColor>
        </DatGui>
      ) : (
        <div>loading...</div>
      )}
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
            {currentAnimation === "Horizon" ? (
              <>
                <SphereAnimation horizonSettings={horizonSettings} />
                <BoxAnimation />
              </>
            ) : (
              <></>
            )}
            {currentAnimation === "Pulse" ? (
              <>
                <CircleAnimation pulseSettings={pulseSettings} />
              </>
            ) : (
              <></>
            )}
            {currentAnimation === "Vortex" ? (
              <>
                <PlaneAnimation vortexSettings={vortexSettings} />
                <TorusAnimation />
              </>
            ) : (
              <></>
            )}
          </Suspense>
          {/* <Stars
            radius={100} // Radius of the inner sphere (default=100)
            depth={50} // Depth of area where stars should fit (default=50)
            count={1000} // Amount of stars (default=5000)
            factor={6} // Size factor (default=4)
            saturation={0} // Saturation 0-1 (default=0)
            fade // Faded dots (default=false) */}
          {/* /> */}
        </Canvas>
      </div>
    </div>
  );
};

export default Scene;
