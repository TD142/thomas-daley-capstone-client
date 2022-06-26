import React from "react";
import "./sampler.scss";
import * as Tone from "tone";

const Sampler = () => {
  const synth = new Tone.PolySynth().toMaster();

  const playSynth = () => {
    synth.triggerAttackRelease("C4", "12n");
  };

  return (
    <div className="sampler">
      {/* <h2 className="sampler__header">PLAY</h2> */}
      <div className="sampler__container">
        <button onClick={playSynth} className="sampler__trigger"></button>
        <button className="sampler__trigger"></button>
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
