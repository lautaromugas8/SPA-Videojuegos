require("dotenv").config();
const { Router } = require("express");
const axios = require("axios").default;
const { Genre } = require("../db");
const { API_KEY } = process.env;

const genresRouter = Router();

// Gets all the genres for the games.
genresRouter.get("/", async (req, res) => {
  const genres = await Genre.findAll();

  // If genres are in the DataBase, simply sends them back.
  if (genres.length > 0) {
    res.send(genres);
  } else {
    // If not we call the API and add them in the DataBase, then sends them.
    try {
      const response = await axios.get(
        `https://api.rawg.io/api/genres?key=${API_KEY}`
      );
      const data = await response.data.results;

      // We only want the names of the genres.
      data.forEach((g) => Genre.create({ name: g.name }));

      res.redirect("/genres");
    } catch (error) {
      res.send(error);
    }
  }
});

module.exports = genresRouter;
