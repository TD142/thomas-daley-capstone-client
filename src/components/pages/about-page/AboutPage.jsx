import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import "./AboutPage.scss";
import { OrbitControls } from "@react-three/drei";
import WaterAnimation from "../../water-animation/WaterAnimation";

const AboutPage = () => {
  return (
    <div>
      <section className="about__container">
        <h1 className="about__header">OMEGA</h1>

        <p className="about__text">
          Omega is an exporation in chance. The starting blocks of creation have
          been laid by the artist, Prayer, however it is down to the listener to
          create the music.
        </p>
      </section>

      <section className="about__container">
        <h2 className="about__secondary-header">About The Artist</h2>
        <p className="about__secondary-text">
          Prayer is a electronic musician focusing on the cinematic and
          emotional side of dance music. His music has been played on BBC Radio
          1, BBC Radio 6, Kiss FM, Rinse FM and he has played at venues around
          the world such as Dimensions Festival Croatia, and the Tate Modern
          London.
        </p>
      </section>
      <div className="canvas">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 10, 2]} intensity={0.5} />
          {/* <mesh>
            <sphereGeometry args={[1.5, 60, 60]} />
            <meshBasicMaterial wireframe={true} />
          </mesh> */}

          <WaterAnimation />
        </Canvas>
      </div>
    </div>
  );
};

export default AboutPage;
