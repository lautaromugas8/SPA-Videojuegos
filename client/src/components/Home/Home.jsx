import React from "react";
import { useSelector } from "react-redux";
import GameList from "./GameList";
import "./Home.css";
import Pagination from "./Pagination";
import Sidebar from "./Sidebar";

function Home() {
  const { games } = useSelector((state) => state);

  return (
    <div>
      <Pagination />
      <Sidebar />
      <div className="home">
        {games.length ? <GameList /> : <div className="loading"></div>}
      </div>
    </div>
  );
}

export default Home;
