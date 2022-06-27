import React from "react";
import { Canvas, extend } from "@react-three/fiber";
import SphereAnimation from "../sphere-animation/SphereAnimation.jsx";
import { OrbitControls } from "@react-three/drei";
import "./Canvas.scss";
import { Suspense } from "react";
import BoxAnimation from "../box-animation/BoxAnimation.jsx";
import CircleAnimation from "../circle-animation/CircleAnimation.jsx";
import { useState } from "react";
import { Stars } from "@react-three/drei";

const Scene = () => {
  const [currentShape, setCurrentShape] = useState("circle");

  return (
    <div>
      <select>
        <option value="fruit">Horizon</option>
        <option value="vegetable">React</option>
        <option value="meat">Meat</option>
      </select>
      <div className="canvas">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 10, 2]} intensity={0.5} />
          <Suspense fallback={null}>
            {currentShape === "sphere" ? (
              <>
                <SphereAnimation />
                <BoxAnimation />
              </>
            ) : (
              <CircleAnimation />
            )}

            {currentShape === "circle" ? (
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
