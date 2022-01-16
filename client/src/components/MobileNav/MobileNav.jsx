import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../Nav/SearchBar";
import "./MobileNav.css";

export default function MobileNav() {
  return (
    <nav id="nav-mobile" role="navigation">
      <div id="menuToggleMobile">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu-mobile">
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/home/add">
            <li>Crear</li>
          </Link>
          {/* <div>
            <SearchBar />
          </div> */}
        </ul>
      </div>
    </nav>
  );
}
