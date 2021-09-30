import React from "react";
import { useDispatch } from "react-redux";
import "./SearchBar.css";
import { searchGame } from "../../redux/actions";

function SearchBar() {
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(searchGame(e));
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input type="search" placeholder="Search for videogames..." name="name" />
      <button>Buscar</button>
    </form>
  );
}

export default SearchBar;
