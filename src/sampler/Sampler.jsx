import React, { useState } from "react";
import "./sampler.scss";

const Sampler = ({ sounds }) => {
  const [soundPlaying, setSoundPlaying] = useState(false);

  const kick = new Audio(sounds.kick);
  const pad = new Audio(sounds.pad1);

  const playKick = () => {
    if (kick.paused === true) {
      kick.play();
    } else {
      kick.pause();
      kick.currentTime = 0;
    }
  };

  const playPad = () => {
    if (pad.paused === true) {
      pad.play();
    } else {
      pad.pause();
      pad.currentTime = 0;
    }
  };

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioCtx = new AudioContext();

  console.log(audioCtx.currentTime);

  return (
    <div className="sampler">
      {/* <h2 className="sampler__header">PLAY</h2> */}
      <div className="sampler__container">
        <button onClick={playKick} className="sampler__trigger"></button>
        <button onClick={playPad} className="sampler__trigger"></button>
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
