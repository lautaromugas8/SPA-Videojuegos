import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <ul className="sidebar">
      <Link to="/home">
        <li id="home">Home</li>
      </Link>
      <Link to="/home/add">
        <li id="crear">Crear</li>
      </Link>
      <Link to="/home/about">
        <li id="about">Acerca de</li>
      </Link>
    </ul>
  );
}

export default Sidebar;
