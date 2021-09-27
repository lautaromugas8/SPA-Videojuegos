import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

function SearchBar() {
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await axios.get(
      `http://localhost:3001/videogames?name=${e.target[0].value}`
    );
    dispatch({ type: "reset" });
    dispatch({ type: "search", payload: response.data });
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input type="search" placeholder="Search for videogames..." name="name" />
      <button>Search</button>
    </form>
  );
}

export default SearchBar;
