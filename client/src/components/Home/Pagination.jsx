import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGamesPerPage } from "../../redux/actions";
import "./Pagination.css";

function Pagination() {
  const games = useSelector((state) => state.games);
  const dispatch = useDispatch();

  return (
    <div className="pagination">
      <button onClick={() => dispatch(setGamesPerPage(1, games))}>1</button>
      <button onClick={() => dispatch(setGamesPerPage(2, games))}>2</button>
      <button onClick={() => dispatch(setGamesPerPage(3, games))}>3</button>
      <button onClick={() => dispatch(setGamesPerPage(4, games))}>4</button>
      <button onClick={() => dispatch(setGamesPerPage(5, games))}>5</button>
      <button onClick={() => dispatch(setGamesPerPage(6, games))}>6</button>
    </div>
  );
}

export default Pagination;
