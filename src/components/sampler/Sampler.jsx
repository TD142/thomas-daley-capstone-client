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
  volume1,
  volume2,
  volume3,
  volume4,
  volume5,
  volume6,
  volume7,
  volume8,
}) => {
  return (
    <div className="sampler">
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
