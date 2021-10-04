import React, { useState } from "react";
import axios from "axios";
import "./AddGameForm.css";

function AddGameForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [release_date, setReleaseDate] = useState("");
  const [rating, setRating] = useState("");
  const [platforms, setPlatforms] = useState("");
  const [genres, setGenres] = useState([]);
  const [isPending, setIsPending] = useState(false);

  function selectGenres(e) {
    if (genres.length > 3 && e.target.checked) {
      alert("no podes seleccionar mas de 4");
      e.target.checked = false;
      return;
    }
    if (genres.includes(e.target.value)) {
      setGenres(genres.filter((elem) => elem !== e.target.value));
    } else {
      setGenres([...genres, e.target.value]);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setIsPending(true);
      const response = await axios.post("http://localhost:3001/videogame", {
        name,
        description,
        release_date,
        rating,
        platforms,
        genres,
      });
      setIsPending(false);
      alert(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="add-game">
      <h1>Añadir un juego</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Mi primer juego"
          />
        </label>
        <label>
          Descripción:
          <textarea
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Escribí una descripción sobre tu juego..."
          ></textarea>
        </label>
        <label>
          Fecha de Lanzamiento:
          <input
            type="date"
            value={release_date}
            onChange={(e) => setReleaseDate(e.target.value)}
          />
        </label>
        <label>
          Rating:
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            placeholder="3.50"
            step="0.01"
            min="0"
            max="5"
          />
        </label>
        <label>
          Plataformas:
          <input
            type="text"
            required
            value={platforms}
            onChange={(e) => setPlatforms(e.target.value)}
            placeholder="PC, PlayStation 5, Xbox One..."
          />
        </label>
        {/* <label>
          Generos:
          <select value="Seleccionar generos" onChange={selectGenres}>
            <option value="">Seleccionar generos</option>
            <option value="1">Action</option>
            <option value="2">Indie</option>
            <option value="3">Adventure</option>
            <option value="4">RPG</option>
            <option value="5">Strategy</option>
            <option value="6">Shooter</option>
            <option value="7">Casual</option>
            <option value="8">Simulation</option>
            <option value="9">Puzzle</option>
            <option value="10">Arcade</option>
            <option value="11">Platformer</option>
            <option value="12">Racing</option>
            <option value="13">Massively Multiplayer</option>
            <option value="14">Sports</option>
            <option value="15">Fighting</option>
            <option value="16">Family</option>
            <option value="17">Board Games</option>
            <option value="18">Educational</option>
            <option value="19">Card</option>
          </select>
        </label> */}
        <fieldset onChange={selectGenres}>
          <legend>Generos (máximo 4)</legend>
          <input type="checkbox" value="1" />
          Action
          <input type="checkbox" value="2" />
          Indie
          <input type="checkbox" value="3" />
          Adventure
          <input type="checkbox" value="4" />
          RPG
          <input type="checkbox" value="5" />
          Strategy
          <input type="checkbox" value="6" />
          Shooter
          <input type="checkbox" value="7" />
          Casual
          <input type="checkbox" value="8" />
          Simulation
          <input type="checkbox" value="9" />
          Puzzle
          <input type="checkbox" value="10" />
          Arcade
          <input type="checkbox" value="11" />
          Platformer
          <input type="checkbox" value="12" />
          Racing
          <input type="checkbox" value="13" />
          Massively Multiplayer
          <input type="checkbox" value="14" />
          Sports
          <input type="checkbox" value="15" />
          Fighting
          <input type="checkbox" value="16" />
          Family
          <input type="checkbox" value="17" />
          Board Games
          <input type="checkbox" value="18" />
          Educational
          <input type="checkbox" value="19" />
          Card
        </fieldset>
        {!isPending && <button>Añadir Juego</button>}
        {isPending && <button disabled>Loading...</button>}
      </form>
    </div>
  );
}

export default AddGameForm;
