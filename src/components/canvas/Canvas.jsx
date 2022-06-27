import React from "react";
import { Canvas, extend } from "@react-three/fiber";
import SphereAnimation from "../sphere-animation/SphereAnimation.jsx";
import { OrbitControls } from "@react-three/drei";
import "./Canvas.scss";
import { Suspense } from "react";
import BoxAnimation from "../box-animation/BoxAnimation.jsx";
import CircleAnimation from "../circle-animation/CircleAnimation.jsx";
import { useState } from "react";

import DatGui, {
  DatBoolean,
  DatColor,
  DatNumber,
  DatString,
} from "react-dat-gui";

const Scene = () => {
  const [currentAnimation, setCurrentAnimation] = useState("Horizon");
  const [color, setColor] = useState({
    dotColor: "#22454D",
  });

  const handleChange = async (event) => {
    setCurrentAnimation(event.target.value);
  };

  // const handleUpdate = (data) => {
  //   setDatGuiData(data);
  //   console.log(data);
  // };

  return (
    <div>
      <DatGui data={color} onUpdate={setColor}>
        <DatColor path="dotColor" label="dotColor"></DatColor>
      </DatGui>
      {/* <h3 className="option__title">ANIMATION</h3> */}
      <div className="animation-dropdown__container">
        <select className="animation-dropdown" onChange={handleChange}>
          <option value="Horizon">Horizon</option>
          <option value="React">React</option>
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
                <SphereAnimation />
                <BoxAnimation />
              </>
            ) : (
              <CircleAnimation />
            )}

            {currentAnimation === "React" ? (
              <>
                <CircleAnimation />
              </>
            ) : (
              <>
                <SphereAnimation />
                <BoxAnimation />
              </>
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
