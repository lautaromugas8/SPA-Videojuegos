import React from "react";
import SearchBar from "./SearchBar";
import "./Nav.css";
import Sidebar from "./Sidebar";

function Nav() {
  return (
    <nav className="nav">
      <Sidebar />
      <SearchBar />
    </nav>
  );
}

export default Nav;
