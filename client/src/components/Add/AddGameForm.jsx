import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import "./AddGameForm.css";
import { getAllGames } from "../../redux/actions";

function AddGameForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [released, setReleased] = useState("");
  const [rating, setRating] = useState("");
  const [background_image, setBackground_Image] = useState("");
  const [platforms, setPlatforms] = useState([]);
  const [genres, setGenres] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  function selectPlatforms(e) {
    if (platforms.includes(e.target.value)) {
      setPlatforms(platforms.filter((elem) => elem !== e.target.value));
    } else {
      setPlatforms([...platforms, e.target.value]);
    }
  }

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
      if (!platforms.length)
        throw new Error("Debes seleccionar al menos una plataforma");
      setIsPending(true);
      const response = await axios.post("http://localhost:3001/videogame", {
        name,
        description,
        released,
        rating,
        background_image,
        platforms,
        genres,
      });
      setIsPending(false);
      dispatch(getAllGames());
      alert(response.data);
      history.go(0);
    } catch (error) {
      alert(error);
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
            value={released}
            onChange={(e) => setReleased(e.target.value)}
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
          Imagen:
          <input
            type="url"
            value={background_image}
            onChange={(e) => setBackground_Image(e.target.value)}
          />
        </label>
        <fieldset onChange={selectPlatforms}>
          <legend>Plataformas</legend>
          <input type="checkbox" value="PC" />
          PC
          <input type="checkbox" value="Xbox 360" />
          Xbox 360
          <input type="checkbox" value="Xbox One" />
          Xbox One
          <input type="checkbox" value="PlayStation 1" />
          PS1
          <input type="checkbox" value="PlayStation 2" />
          PS2
          <input type="checkbox" value="PlayStation 3" />
          PS3
          <input type="checkbox" value="PlayStation 4" />
          PS4
          <input type="checkbox" value="PlayStation 5" />
          PS5
          <input type="checkbox" value="Nintendo Wii" />
          Nintendo Wii
          <input type="checkbox" value="Nintendo Wii U" />
          Nintendo Wii U
          <input type="checkbox" value="Nintendo Switch" />
          Nintendo Switch
          <input type="checkbox" value="Mobile" />
          Mobile
        </fieldset>
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
