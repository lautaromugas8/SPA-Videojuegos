import React, { useEffect } from "react";
import { getAllGames, setGamesPerPage } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import GameList from "./GameList";
import "./Home.css";
import Pagination from "./Pagination";

function Home() {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games);

  useEffect(() => {
    dispatch(getAllGames());
  }, [dispatch]);

  if (games.length > 0) dispatch(setGamesPerPage(1, games));

  return (
    <div>
      <Pagination />
      <div className="home">
        {games.length > 0 ? <GameList /> : <h1>Loading...</h1>}
      </div>
    </div>
  );
}

export default Home;
