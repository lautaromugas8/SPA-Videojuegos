import React, { useEffect } from "react";
import { getAllGames } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import GameList from "./GameList";
import "./Home.css";
import Sidebar from "./Sidebar";

function Home() {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games);

  useEffect(() => {
    dispatch(getAllGames());
  }, [dispatch]);

  return (
    <div className="home">
      <Sidebar />
      {games.length > 0 ? <GameList /> : <h1>Loading...</h1>}
    </div>
  );
}

export default Home;
