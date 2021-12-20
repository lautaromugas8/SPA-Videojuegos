import * as React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";
import { searchGame } from "../../redux/actions/gamesOnPageActions";

function SearchBar() {
  const [inputValue, setInputValue] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(searchGame(inputValue));
    if (document.getElementsByClassName("pagination")[0]) {
      document.getElementsByClassName("pagination")[0].className =
        "nopagination";
    }
    navigate("/home");
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
