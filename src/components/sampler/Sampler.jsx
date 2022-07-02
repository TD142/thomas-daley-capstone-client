import React, { useRef, useState } from "react";
import * as THREE from "three";
import "./Sampler.scss";
import { useEffect } from "react";

const Sampler = ({
  triggerAudio,
  arpSound,
  bassSound,
  padSound1,
  padSound2,
  leadSound1,
  leadSound2,
  leadSound3,
  droneSound,
  handleSoundChange,
  handleBankChange,
}) => {
  return (
    <div className="sampler">
      {/* <h2 className="sampler__header">PLAY</h2> */}
      <div className="sampler__container">
        <button
          onClick={(event) => {
            triggerAudio(event, padSound1);
          }}
          className="sampler__trigger"
        ></button>

        <button
          onClick={(event) => {
            triggerAudio(event, leadSound2);
          }}
          className="sampler__trigger"
        ></button>
        <button
          onClick={(event) => {
            triggerAudio(event, padSound2);
          }}
          className="sampler__trigger"
        ></button>
        <button
          onClick={(event) => {
            triggerAudio(event, bassSound);
          }}
          className="sampler__trigger"
        ></button>
      </div>
      <div className="sampler__container">
        <button
          onClick={(event) => {
            triggerAudio(event, leadSound1);
          }}
          className="sampler__trigger"
        ></button>
        <button
          onClick={(event) => {
            triggerAudio(event, droneSound);
          }}
          className="sampler__trigger"
        ></button>
        <button
          onClick={(event) => {
            triggerAudio(event, arpSound);
          }}
          className="sampler__trigger"
        ></button>
        <button
          onClick={(event) => {
            triggerAudio(event, leadSound3);
          }}
          className="sampler__trigger"
        ></button>
      </div>
      <div className="sampler-dropdown__container ">
        <select
          onChange={(event) => {
            handleSoundChange(event);
            handleBankChange();
          }}
          className="sampler-dropdown"
        >
          <option value="Atmospheric">Atmospheric</option>
          <option value="Hyacintho">Hyancintho</option>
        </select>
      </div>
    </div>
  );
};

export default Sampler;
