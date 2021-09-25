require("dotenv").config();
const { Router } = require("express");
const axios = require("axios").default;
const { API_KEY } = process.env;

const videogamesRouter = Router();

//TODO: completar las rutas

videogamesRouter.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const response = await axios.get(
        `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`
      );

      const data = await response.data.results;

      if (data.length < 1) return res.send("No existe ningun videojuego");

      let result = [];

      for (let i = 0; i < 15; i++) {
        const { name, platforms, released, background_image, rating, genres } =
          data[i];
        const gameData = {
          name,
          platforms,
          released,
          background_image,
          rating,
          genres,
        };
        result.push(gameData);
      }
      res.send(result);
    } else {
      const response = await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}`
      );

      const data = await response.data.results;

      let result = [];

      //max 20
      for (let i = 0; i < 20; i++) {
        const { name, platforms, released, background_image, rating, genres } =
          data[i];
        const gameData = {
          name,
          platforms,
          released,
          background_image,
          rating,
          genres,
        };
        result.push(gameData);
      }
      res.send(result);
    }
  } catch (error) {
    res.send(error.response.data);
  }
});

module.exports = videogamesRouter;
