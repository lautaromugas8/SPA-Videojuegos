import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGamesPerPage } from "../../redux/actions";
import "./Pagination.css";

function Pagination() {
  const games = useSelector((state) => state.games);
  const gamesOnPage = useSelector((state) => state.gamesOnPage);
  const filteredGames = useSelector((state) => state.filteredGames);
  const dispatch = useDispatch();

  function handleClick(num) {
    if (filteredGames.length > 0) dispatch(setGamesPerPage(num, filteredGames));
    else dispatch(setGamesPerPage(num, games));
  }

  if (gamesOnPage.length > 0) {
    return (
      <div
        className={
          gamesOnPage[0].length === 15 || filteredGames.length > 15
            ? "pagination"
            : "nopagination"
        }
      >
        <button onClick={() => handleClick(1)}>1</button>
        <button onClick={() => handleClick(2)}>2</button>
        <button onClick={() => handleClick(3)}>3</button>
        <button onClick={() => handleClick(4)}>4</button>
        <button onClick={() => handleClick(5)}>5</button>
        <button onClick={() => handleClick(6)}>6</button>
      </div>
    );
  } else return <div></div>;
}

export default Pagination;
