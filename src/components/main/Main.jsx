import React from "react";
import Scene from "../scene/Scene";
import "./Main.scss";

const Main = ({ sounds, handleSoundChange }) => {
  return (
    <div>
      <main className="main">
        <h1 className="page-title">PRAYER</h1>

        <Scene handleSoundChange={handleSoundChange} sounds={sounds} />
      </main>
    </div>
  );
};

export default Main;
