import React from "react";
import defaultImage from "../../images/default-placeholder.png";
import { Link } from "react-router-dom";
import "./Game.css";

function Game({ props }) {
  return (
    <Link to={`/home/game/${props.id}`}>
      <div className="game">
        <h4>{props.name.replace(/-/g, " ")}</h4>
        <img
          src={props.background_image ? props.background_image : defaultImage}
          alt=""
        />
        <p>
          {props.genres.map((g, index) =>
            index === props.genres.length - 1 ? g.name + "." : g.name + ", "
          )}
        </p>
      </div>
    </Link>
  );
}

export default Game;
