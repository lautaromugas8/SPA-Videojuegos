require("dotenv").config();
const { Router } = require("express");
const axios = require("axios").default;
const { Genre } = require("../db");
const { API_KEY } = process.env;

const genresRouter = Router();

genresRouter.get("/", async (req, res) => {
  const genres = await Genre.findAll();

  if (genres.length > 0) {
    res.send(genres);
  } else {
    try {
      const response = await axios.get(
        `https://api.rawg.io/api/genres?key=${API_KEY}`
      );
      const data = await response.data.results;

      data.forEach((g) => Genre.create({ name: g.name }));

      res.redirect("/genres");
    } catch (error) {
      res.send(error);
    }
  }
});

module.exports = genresRouter;
