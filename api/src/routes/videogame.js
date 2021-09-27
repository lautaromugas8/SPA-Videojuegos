require("dotenv").config();
const { Router } = require("express");
const { API_KEY } = process.env;
const axios = require("axios").default;
const { Videogame, Genre } = require("../db");

const videogameRouter = Router();

//TODO: completar las rutas

videogameRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  //nombre, imagen, generos, descripcion, release, rating, plataformas
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
    );
    const data = await response.data;
    const {
      name,
      background_image,
      genres,
      description,
      released,
      rating,
      platforms,
    } = data;
    res.send({
      name,
      background_image,
      genres,
      description,
      released,
      rating,
      platforms,
    });
  } catch (error) {
    res.send(error.response.data);
  }
});

videogameRouter.post("/", async (req, res) => {
  const { name, description, release_date, rating, platforms, genres } =
    req.body;

  try {
    const videogame = await Videogame.create({
      name,
      description,
      release_date,
      rating,
      platforms,
    });

    videogame.addGenres(genres);

    res.send("Videogame created");
  } catch (error) {
    res.send(error.parent.detail);
  }
});

module.exports = videogameRouter;
