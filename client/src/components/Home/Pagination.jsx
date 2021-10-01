import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGamesPerPage } from "../../redux/actions";
import "./Pagination.css";

function Pagination() {
  const games = useSelector((state) => state.games);
  const gamesOnPage = useSelector((state) => state.gamesOnPage);
  const dispatch = useDispatch();
  if (gamesOnPage.length > 0) {
    return (
      <div
        className={gamesOnPage[0].length === 15 ? "pagination" : "nopagination"}
      >
        <button onClick={() => dispatch(setGamesPerPage(1, games))}>1</button>
        <button onClick={() => dispatch(setGamesPerPage(2, games))}>2</button>
        <button onClick={() => dispatch(setGamesPerPage(3, games))}>3</button>
        <button onClick={() => dispatch(setGamesPerPage(4, games))}>4</button>
        <button onClick={() => dispatch(setGamesPerPage(5, games))}>5</button>
        <button onClick={() => dispatch(setGamesPerPage(6, games))}>6</button>
      </div>
    );
  } else return <div></div>;
}

export default Pagination;
