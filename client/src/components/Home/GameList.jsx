import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGamesPerPage } from "../../redux/actions";
import Game from "./Game";
import "./GameList.css";

function GameList() {
  const games = useSelector((state) => state.games);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setGamesPerPage(1, games));
    console.log("page 1");
  }, [dispatch, games]);

  const gamesOnPage = useSelector((state) => state.gamesOnPage);

  if (gamesOnPage.length > 0) {
    return (
      <div className="games-list">
        {gamesOnPage[0].map((g) => (
          <Game props={g} key={g.id} />
        ))}
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default GameList;
