import React, { useState } from "react";
import "./Sampler.scss";

const Sampler = ({ sounds }) => {
  const [soundPlaying, setSoundPlaying] = useState(false);

  const bass = new Audio(sounds.bass);
  const arp = new Audio(sounds.arp);
  const pad1 = new Audio(sounds.pad1);
  const pad2 = new Audio(sounds.pad2);
  const lead1 = new Audio(sounds.lead1);
  const lead2 = new Audio(sounds.lead2);
  const lead3 = new Audio(sounds.lead3);
  const drone = new Audio(sounds.drone);

  const triggerAudio = (event, sound) => {
    if (sound.paused === true) {
      sound.volume = 1;
      sound.currentTime = 0;
      sound.play();
      sound.loop = true;
      event.target.classList.add("sampler__trigger--playing");
    } else {
      const fadeAudio = setInterval(() => {
        if (sound.volume && sound.currentTime > 0) {
          sound.volume -= 0.1;
        }

        if (sound.volume < 0.003) {
          clearInterval(fadeAudio);
          sound.pause();
          event.target.classList.remove("sampler__trigger--playing");
          sound.currentTime = 0;
        }
      }, 200);
    }

    console.log();
  };

  return (
    <div className="sampler">
      {/* <h2 className="sampler__header">PLAY</h2> */}
      <div className="sampler__container">
        <button
          onClick={(event) => {
            triggerAudio(event, pad1);
          }}
          className="sampler__trigger"
        ></button>

        <button
          onClick={(event) => {
            triggerAudio(event, lead2);
          }}
          className="sampler__trigger"
        ></button>
        <button
          onClick={(event) => {
            triggerAudio(event, pad2);
          }}
          className="sampler__trigger"
        ></button>
        <button
          onClick={(event) => {
            triggerAudio(event, bass);
          }}
          className="sampler__trigger"
        ></button>
      </div>
      <div className="sampler__container">
        <button
          onClick={(event) => {
            triggerAudio(event, lead1);
          }}
          className="sampler__trigger"
        ></button>
        <button
          onClick={(event) => {
            triggerAudio(event, drone);
          }}
          className="sampler__trigger"
        ></button>
        <button
          onClick={(event) => {
            triggerAudio(event, arp);
          }}
          className="sampler__trigger"
        ></button>
        <button
          onClick={(event) => {
            triggerAudio(event, lead3);
          }}
          className="sampler__trigger"
        ></button>
      </div>
    </div>
  );
};

export default Sampler;
