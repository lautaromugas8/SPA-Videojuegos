import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  resetFilteredGames,
  setFilteredGames,
  setGamesPerPage,
} from "../../redux/actions";
import "./Sidebar.css";

function Sidebar() {
  const games = useSelector((state) => state.games);
  const dispatch = useDispatch();

  function handleCheckbox(e) {
    if (e.target.checked) {
      const filtered = games[0].filter((g) => typeof g.id !== "number");
      if (!filtered) {
        return alert("No tenes ningún juego creado");
      }
      dispatch(setGamesPerPage("creados", filtered));
    } else {
      dispatch(setGamesPerPage(1, games));
    }
  }

  function handleChangeSelect(e) {
    const index = e.target.options.selectedIndex;

    if (e.target.name === "name") {
      if (e.target.options[index].value === "ASC") {
        games[0].sort((a, b) => a.name.localeCompare(b.name));
        dispatch(setGamesPerPage(1, games));
      } else if (e.target.options[index].value === "DESC") {
        games[0].sort((a, b) => b.name.localeCompare(a.name));
        dispatch(setGamesPerPage(1, games));
      } else {
        games[0].sort((a, b) => {
          const ar = a.hasOwnProperty("added"),
            br = b.hasOwnProperty("added");
          if (ar && br) {
            return b.added - a.added;
          }
          return ar ? 1 : br ? -1 : 0;
        });
        dispatch(setGamesPerPage(1, games));
      }
    } else if (e.target.name === "rating") {
      if (e.target.options[index].value === "ASC") {
        games[0].sort((a, b) => a.rating - b.rating);

        dispatch(setGamesPerPage(1, games));
      } else if (e.target.options[index].value === "DESC") {
        games[0].sort((a, b) => b.rating - a.rating);
        dispatch(setGamesPerPage(1, games));
      } else {
        games[0].sort((a, b) => {
          const ar = a.hasOwnProperty("added"),
            br = b.hasOwnProperty("added");
          if (ar && br) {
            return b.added - a.added;
          }
          return ar ? 1 : br ? -1 : 0;
        });
        dispatch(setGamesPerPage(1, games));
      }
    }
  }

  function genreSelect(e) {
    const index = e.target.options.selectedIndex;
    if (index === 0) {
      games[0].sort((a, b) => {
        const ar = a.hasOwnProperty("added"),
          br = b.hasOwnProperty("added");
        if (ar && br) {
          return b.added - a.added;
        }
        return ar ? 1 : br ? -1 : 0;
      });
      dispatch(resetFilteredGames());
      dispatch(setGamesPerPage(1, games));
    } else {
      const filtered = games[0].filter((g) =>
        g.genres.some((gen) => gen.name === e.target.options[index].value)
      );
      dispatch(setFilteredGames(filtered));
      dispatch(setGamesPerPage(1, filtered));
    }
  }

  if (games.length > 0) {
    return (
      <nav className="sidebar">
        <ul>
          <li>
            <label htmlFor="creados">Filtrar creados</label>
            <input
              type="checkbox"
              name="creados"
              id="creados"
              onChange={handleCheckbox}
            />
          </li>
          <li>
            Genero:
            <select name="genres" id="genres-select" onChange={genreSelect}>
              <option value="">Seleccionar genero</option>
              <option value="Action">Action</option>
              <option value="Indie">Indie</option>
              <option value="Adventure">Adventure</option>
              <option value="RPG">RPG</option>
              <option value="Strategy">Strategy</option>
              <option value="Shooter">Shooter</option>
              <option value="Casual">Casual</option>
              <option value="Simulation">Simulation</option>
              <option value="Puzzle">Puzzle</option>
              <option value="Arcade">Arcade</option>
              <option value="Platformer">Platformer</option>
              <option value="Racing">Racing</option>
              <option value="Massively Multiplayer">
                Massively Multiplayer
              </option>
              <option value="Sports">Sports</option>
              <option value="Fighting">Fighting</option>
              <option value="Board Games">Board Games</option>
              <option value="Family">Family</option>
              <option value="Educational">Educational</option>
              <option value="Card">Card</option>
            </select>
          </li>
          <li>
            Nombre:
            <select name="name" id="name-select" onChange={handleChangeSelect}>
              <option value="">Seleccionar orden alfabetico</option>
              <option value="ASC">Ascendente</option>
              <option value="DESC">Descendente</option>
            </select>
          </li>
          <li>
            Rating:
            <select
              name="rating"
              id="rating-select"
              onChange={handleChangeSelect}
            >
              <option value="">Seleccionar orden rating</option>
              <option value="DESC">Mejor votados</option>
              <option value="ASC">Peor votados</option>
            </select>
          </li>
        </ul>
      </nav>
    );
  } else return <div></div>;
}

export default Sidebar;
