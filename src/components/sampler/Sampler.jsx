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
  handleVolumeChange,
}) => {
  const [volume1, setVolume1] = useState(1);
  const [volume2, setVolume2] = useState(1);
  const [volume3, setVolume3] = useState(1);
  const [volume4, setVolume4] = useState(1);
  const [volume5, setVolume5] = useState(1);
  const [volume6, setVolume6] = useState(1);
  const [volume7, setVolume7] = useState(1);
  const [volume8, setVolume8] = useState(1);

  return (
    <div className="sampler">
      {/* <h2 className="sampler__header">PLAY</h2> */}
      <div className="sampler__container">
        <div className="sampler__inner-container">
          <button
            onClick={(event) => {
              triggerAudio(event, padSound1);
            }}
            className="sampler__trigger"
          ></button>
          <input
            type="range"
            min={0}
            max={1}
            step={0.02}
            value={volume1}
            onChange={(event) => {
              setVolume1(event.target.valueAsNumber);
              handleVolumeChange(event, padSound1);
            }}
          />
        </div>
        <div className="sampler__inner-container">
          <button
            onClick={(event) => {
              triggerAudio(event, leadSound2);
            }}
            className="sampler__trigger"
          ></button>
          <input
            type="range"
            min={0}
            max={1}
            step={0.02}
            value={volume2}
            onChange={(event) => {
              setVolume2(event.target.valueAsNumber);
              handleVolumeChange(event, leadSound2);
            }}
          />
        </div>
        <div className="sampler__inner-container">
          <button
            onClick={(event) => {
              triggerAudio(event, padSound2);
            }}
            className="sampler__trigger"
          ></button>
          <input
            type="range"
            min={0}
            max={1}
            step={0.02}
            value={volume3}
            onChange={(event) => {
              setVolume3(event.target.valueAsNumber);
              handleVolumeChange(event, padSound2);
            }}
          />
        </div>
        <div className="sampler__inner-container">
          <button
            onClick={(event) => {
              triggerAudio(event, bassSound);
            }}
            className="sampler__trigger"
          ></button>
          <input
            type="range"
            min={0}
            max={1}
            step={0.02}
            value={volume4}
            onChange={(event) => {
              setVolume4(event.target.valueAsNumber);
              handleVolumeChange(event, bassSound);
            }}
          />
        </div>
      </div>
      <div className="sampler__container">
        <div className="sampler__inner-container">
          <button
            onClick={(event) => {
              triggerAudio(event, leadSound1);
            }}
            className="sampler__trigger"
          ></button>
          <input
            type="range"
            min={0}
            max={1}
            step={0.02}
            value={volume5}
            onChange={(event) => {
              setVolume5(event.target.valueAsNumber);
              handleVolumeChange(event, leadSound1);
            }}
          />
        </div>
        <div className="sampler__inner-container">
          <button
            onClick={(event) => {
              triggerAudio(event, droneSound);
            }}
            className="sampler__trigger"
          ></button>
          <input
            type="range"
            min={0}
            max={1}
            step={0.02}
            value={volume6}
            onChange={(event) => {
              setVolume6(event.target.valueAsNumber);
              handleVolumeChange(event, droneSound);
            }}
          />
        </div>
        <div className="sampler__inner-container">
          <button
            onClick={(event) => {
              triggerAudio(event, arpSound);
            }}
            className="sampler__trigger"
          ></button>
          <input
            type="range"
            min={0}
            max={1}
            step={0.02}
            value={volume7}
            onChange={(event) => {
              setVolume7(event.target.valueAsNumber);
              handleVolumeChange(event, arpSound);
            }}
          />
        </div>
        <div className="sampler__inner-container">
          <button
            onClick={(event) => {
              triggerAudio(event, leadSound3);
            }}
            className="sampler__trigger"
          ></button>
          <input
            type="range"
            min={0}
            max={1}
            step={0.02}
            value={volume8}
            onChange={(event) => {
              setVolume8(event.target.valueAsNumber);
              handleVolumeChange(event, leadSound3);
            }}
          />
        </div>
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
