import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./SearchBar.css";
import { searchGame } from "../../redux/actions";

function SearchBar() {
  const dispatch = useDispatch();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(searchGame(e));
    if (document.getElementsByClassName("pagination")[0]) {
      document.getElementsByClassName("pagination")[0].className =
        "nopagination";
    }
    history.push("/home");
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Buscar videojuegos..."
        name="name"
        required
      />
      <button>Buscar</button>
    </form>
  );
}

export default SearchBar;
