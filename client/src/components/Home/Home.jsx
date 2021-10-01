import React from "react";
import { useSelector } from "react-redux";
import GameList from "./GameList";
import "./Home.css";
import Pagination from "./Pagination";
import Sidebar from "./Sidebar";

function Home() {
  const games = useSelector((state) => state.games);

  return (
    <div>
      <Pagination />
      <Sidebar />
      <div className="home">
        {games.length > 0 ? <GameList /> : <h1>Loading...</h1>}
      </div>
    </div>
  );
}

export default Home;
