import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./SearchBar.css";
import { searchGame } from "../../redux/actions";

function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(searchGame(inputValue));
    if (document.getElementsByClassName("pagination")[0]) {
      document.getElementsByClassName("pagination")[0].className =
        "nopagination";
    }
    history.push("/home");
    setInputValue("");
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Buscar videojuegos..."
        name="name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        required
      />
      {inputValue && <button>Buscar</button>}
      {!inputValue && <button disabled>Buscar</button>}
    </form>
  );
}

export default SearchBar;
