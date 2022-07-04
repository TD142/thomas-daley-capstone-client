import { Canvas } from "@react-three/fiber";
import "./AboutPage.scss";
import OceanAnimation from "../../ocean-animation/OceanAnimation";

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

      <section className="about__container about__container--border">
        <h2 className="about__secondary-header">About The Artist</h2>
        <p className="about__secondary-text">
          Prayer is a electronic musician focusing on the cinematic and
          emotional side of dance music. His music has been played on BBC Radio
          1, BBC Radio 6, Kiss FM, Rinse FM and he has played at venues around
          the world such as Dimensions Festival Croatia, and the Tate Modern
          London.
        </p>
      </section>

      <section className="about__container about__container--centre">
        <h3>Listen</h3>
        <div className="about__inner-container">
          <a href="https://grade10.uk/">Grade 10</a>
          <a href="https://hooversoundrecordings.bandcamp.com/album/a-love-so-true">
            Hooversound
          </a>
          <a href="https://blackacrerecords.bandcamp.com/album/vital-ep">
            Black Acre
          </a>
          <a href="https://open.spotify.com/artist/72A349ge66Ptp7xhaaRUTR">
            Spotify
          </a>
        </div>
      </section>
      <div className="canvas">
        <Canvas
          camera={{
            rotation: [5, 6, 0],
            position: [2, 20, 400],
            // fov: 55,
            // near: 1,
            // far: 1000,
          }}
        >
          <OceanAnimation />
        </Canvas>
      </div>
    </div>
  );
};

export default AboutPage;
