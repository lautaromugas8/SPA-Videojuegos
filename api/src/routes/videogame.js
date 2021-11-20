require("dotenv").config();
const { Router } = require("express");
const { API_KEY } = process.env;
const axios = require("axios").default;
const { Videogame, Genre } = require("../db");

const videogameRouter = Router();

// Gets the data for the game details page.
videogameRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    // If "id" is an instance of UUID, then the game is in the DataBase.
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

// Adds a game in the DataBase, from the "add game form" page.
videogameRouter.post("/", async (req, res) => {
  let {
    name,
    description,
    released,
    rating,
    background_image,
    platforms,
    genres,
  } = req.body;
  // release_date = new Date().toISOString().split("T")[0];
  if (!released) released = undefined;
  if (!rating) rating = undefined;
  if (!background_image) background_image = undefined;

  name = name.toLowerCase().replace(/\s/g, "-");

  platforms = platforms.join(", ");

  try {
    const videogame = await Videogame.create({
      name,
      description,
      released,
      rating,
      background_image,
      platforms,
    });

    videogame.addGenres(genres);

    res.status(201).send("Videogame created");
  } catch (error) {
    res.send(error.parent.detail);
  }
});

module.exports = videogameRouter;
