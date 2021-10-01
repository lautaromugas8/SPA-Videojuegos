import React from "react";
import SearchBar from "./SearchBar";
import "./Nav.css";
import NavButtons from "./NavButtons";

function Nav() {
  return (
    <nav className="nav">
      <NavButtons />
      <SearchBar />
    </nav>
  );
}

export default Nav;
