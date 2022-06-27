import React, { useState } from "react";
import "./sampler.scss";

const Sampler = ({ sounds }) => {
  const kick = new Audio(sounds.kick);
  const pad = new Audio(sounds.pad1);

  // const playKick = () => {
  //   if (kick.paused === true) {
  //     kick.play();
  //     kick.loop = true;
  //   } else {
  //     kick.pause();
  //     kick.currentTime = 0;
  //   }
  // };

  const triggerAudio = (sound) => {
    if (sound.paused === true) {
      sound.volume = 1;
      sound.play();
    } else {
      const fadeAudio = setInterval(() => {
        if (sound.volume > 0) {
          sound.volume -= 0.1;
        }

        if (sound.volume < 0.003) {
          clearInterval(fadeAudio);
          sound.pause();
          sound.currentTime = 0;
        }
      }, 200);
    }
  };

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioCtx = new AudioContext();

  console.log(audioCtx.currentTime);

  return (
    <div className="sampler">
      {/* <h2 className="sampler__header">PLAY</h2> */}
      <div className="sampler__container">
        <button
          onClick={() => {
            triggerAudio(kick);
          }}
          className="sampler__trigger"
        ></button>
        <button
          onClick={() => {
            triggerAudio(pad);
          }}
          className="sampler__trigger"
        ></button>
        <button className="sampler__trigger"></button>
        <button className="sampler__trigger"></button>
      </div>
      <div className="sampler__container">
        <button className="sampler__trigger"></button>
        <button className="sampler__trigger"></button>
        <button className="sampler__trigger"></button>
        <button className="sampler__trigger"></button>
      </div>
    </div>
  );
};

export default Sampler;
