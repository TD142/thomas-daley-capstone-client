import React from "react";
import Scene from "../canvas/Canvas";
import "./Main.scss";

const Main = () => {
  return (
    <div>
      <main className="main">
        <h1 className="page-title">PRAYER</h1>
        <Scene />
      </main>
    </div>
  );
};

export default Main;
