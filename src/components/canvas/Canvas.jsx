import React from "react";
import { Canvas } from "@react-three/fiber";
import Box from "../../components/Box/Box";
import { OrbitControls } from "@react-three/drei";
import "./Canvas.scss";
import { Suspense } from "react";

const Scene = () => {
  return (
    <div>
      <div className="canvas">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight color="pink" position={[-2, 5, 2]} intensity={4} />
          <Suspense fallback={null}>
            <Box />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Scene;
