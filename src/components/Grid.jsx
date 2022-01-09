import React from "react";
import Card from "./Card";

function Grid() {
  return (
    <div className="container" id="grid">
      <div className="row">
        <div className="col">
          <Card />
        </div>
        <div className="col">
          <Card />
        </div>
        <div className="col">
          <Card />
        </div>
        <div className="col">
          <Card />
        </div>
        <div className="col">
          <Card />
        </div>
        <div className="col">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Grid;
