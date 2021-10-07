require("dotenv").config();
const { Router } = require("express");
const { API_KEY } = process.env;
const axios = require("axios").default;
const { Videogame, Genre } = require("../db");

const videogameRouter = Router();

videogameRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(
        id
      )
    ) {
      const gameDB = await Videogame.findByPk(id, {
        include: [
          {
            model: Genre,
          },
        ],
      });
      if (gameDB.dataValues) res.send(gameDB.dataValues);
    } else {
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
    }
  } catch (error) {
    res.send(error.response.data);
  }
});

videogameRouter.post("/", async (req, res) => {
  let { name, description, release_date, rating, platforms, genres } = req.body;
  if (!release_date) {
    // release_date = new Date().toISOString().split("T")[0];
    release_date = undefined;
  }

  if (!rating) {
    rating = undefined;
  }

  name = name.toLowerCase().replace(/\s/g, "-");

  try {
    const videogame = await Videogame.create({
      name,
      description,
      release_date,
      rating,
      platforms,
    });

    videogame.addGenres(genres);

    res.status(201).send("Videogame created");
  } catch (error) {
    res.send(error.parent.detail);
  }
});

module.exports = videogameRouter;
