import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import GameList from "./GameList";
import "./Home.css";
import Sidebar from "./Sidebar";

function Home() {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games);

  useEffect(() => {
    async function fetchGames() {
      const response = await axios.get("http://localhost:3001/videogames");
      dispatch({ type: "get_all_games", payload: response.data });
    }
    fetchGames();
  }, [dispatch]);

  return (
    <div className="home">
      <Sidebar />
      {games.length > 0 ? <GameList /> : <h1>Loading...</h1>}
    </div>
  );
}

export default Home;
