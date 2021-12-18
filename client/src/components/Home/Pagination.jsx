import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGamesPerPage } from "../../redux/actions/gamesOnPageActions";
import "./Pagination.css";

function Pagination() {
  const { games } = useSelector((state) => state.games);
  const { gamesOnPage, isLoading } = useSelector((state) => state.gamesOnPage);
  const { filteredGames } = useSelector((state) => state.filteredGames);
  const dispatch = useDispatch();

  function handleClick(num) {
    if (filteredGames.length) dispatch(setGamesPerPage(num, filteredGames));
    else dispatch(setGamesPerPage(num, games));
  }

  if (isLoading) {
    return <div></div>;
  }

  return (
    <div
      className={
        gamesOnPage.length === 15 || filteredGames.length > 15
          ? "pagination"
          : "nopagination"
      }
    >
      {[1, 2, 3, 4, 5, 6].map((num) => (
        <button key={num} onClick={() => handleClick(num)}>
          {num}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
