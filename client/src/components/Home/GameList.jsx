import React from "react";
import { useSelector } from "react-redux";
import Game from "./Game";
import "./GameList.css";

function GameList() {
  const games = useSelector((state) => state.games);

  return (
    <div className="games-list">
      {games[0].map((g) => (
        <Game props={g} key={g.name} />
      ))}
    </div>
  );
}

export default GameList;
