import React from "react";
import "./NavButtons.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setGamesPerPage } from "../../redux/actions";

function NavButtons() {
  const { games, filteredGames } = useSelector((state) => state);
  const dispatch = useDispatch();

  function handleClick() {
    if (filteredGames.length) dispatch(setGamesPerPage(1, filteredGames));
    else dispatch(setGamesPerPage(1, games));
    if (document.getElementsByClassName("nopagination")[0]) {
      document.getElementsByClassName("nopagination")[0].className =
        "pagination";
    }
  }

  return (
    <ul className="nav-buttons">
      <Link to="/home" onClick={handleClick}>
        <li id="home">Home</li>
      </Link>
      <Link to="/home/add">
        <li id="crear">Crear</li>
      </Link>
    </ul>
  );
}

export default NavButtons;
