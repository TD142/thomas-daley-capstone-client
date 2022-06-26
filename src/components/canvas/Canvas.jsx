import React from "react";
import { Canvas, extend } from "@react-three/fiber";
import SphereAnimation from "../sphere-animation/SphereAnimation.jsx";
import { OrbitControls } from "@react-three/drei";
import "./Canvas.scss";
import { Suspense } from "react";
import BoxAnimation from "../pages/box-animation/BoxAnimation.jsx";

const Scene = () => {
  return (
    <div>
      <div className="canvas">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 10, 2]} intensity={0.5} />
          <Suspense fallback={null}>
            <SphereAnimation />
            <BoxAnimation />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Scene;
