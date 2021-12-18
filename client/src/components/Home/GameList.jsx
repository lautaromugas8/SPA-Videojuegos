import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGamesPerPage } from "../../redux/actions/gamesOnPageActions";
import Game from "./Game";
import "./GameList.css";

function GameList() {
  const { games } = useSelector((state) => state.games);
  const { gamesOnPage, isLoading } = useSelector((state) => state.gamesOnPage);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setGamesPerPage(1, games));
  }, [dispatch, games]);

  if (isLoading) {
    return <div className="loading"></div>;
  }

  return (
    <div className="games-list">
      {gamesOnPage.map((g) => (
        <Game props={g} key={g.id} />
      ))}
    </div>
  );
}

export default GameList;
