import React from "react";
import "./Game.css";

function Game({ props }) {
  return (
    <div className="game">
      <h4>{props.name}</h4>
      <img src={props.background_image} alt="" />
      <p>
        {props.genres.map((g, index) =>
          index === props.genres.length - 1 ? g.name + "." : g.name + ", "
        )}
      </p>
    </div>
  );
}

export default Game;
