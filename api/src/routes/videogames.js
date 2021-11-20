require("dotenv").config();
const { Router } = require("express");
const axios = require("axios").default;
const { API_KEY } = process.env;
const { Videogame, Genre } = require("../db");

const videogamesRouter = Router();

// Gets all the games, from the DataBase and the API.
// If name is provided, then it searches up to 15 games relevant to that name.
videogamesRouter.get("/", async (req, res) => {
  let { name } = req.query;
  try {
    if (name) {
      let result = [];
      // Sets variable "name" to lower case and replaces all blank spaces with "-".
      name = name.toLowerCase().replace(/\s/g, "-");
      // Search for games with that name in the DataBase.
      const DBGames = await Videogame.findAll({
        attributes: ["id", "name", "rating", "background_image"],
        where: {
          name,
        },
        include: {
          model: Genre,
        },
      });
      // If found, pushes it to the result array.
      if (DBGames.length) {
        DBGames.forEach((v) => {
          result.push({
            id: v.dataValues.id,
            name: v.dataValues.name,
            rating: v.dataValues.rating,
            background_image: v.dataValues.background_image,
            genres: v.dataValues.genres.map((g) => {
              return { id: g.dataValues.id, name: g.dataValues.name };
            }),
          });
        });
      }

      // Search for games with that name in the API and pushes them into the result array.
      const response = await axios.get(
        `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`
      );

      const data = await response.data.results;

      if (!data.length) return res.send("No existe ningun videojuego");

      for (let i = 0; i < 15 - DBGames.length; i++) {
        const { id, name, background_image, genres, rating, added } = data[i];
        const gameData = {
          id,
          name,
          background_image,
          genres,
          rating,
          added,
        };
        result.push(gameData);
      }
      res.send(result);
    } else {
      let result = [];
      // Gets all the games from the DataBase.
      const DBGames = await Videogame.findAll({
        attributes: ["id", "name", "rating", "background_image"],
        include: {
          model: Genre,
        },
      });
      // If there are games, pushes them into the result array.
      if (DBGames.length > 0) {
        DBGames.forEach((v) => {
          result.push({
            id: v.dataValues.id,
            name: v.dataValues.name,
            rating: v.dataValues.rating,
            background_image: v.dataValues.background_image,
            genres: v.dataValues.genres.map((g) => {
              return { id: g.dataValues.id, name: g.dataValues.name };
            }),
          });
        });
      }
      let response = await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}`
      );
      // Loops through the result we get from the API, pushing every game into the result array
      // then sets response to response.data.next, which contains the URL of the next page of results.
      // stops once result has 100 games.
      while (result.length < 100) {
        for (const game of response.data.results) {
          const { id, name, background_image, genres, rating, added } = game;
          const gameData = {
            id,
            name,
            background_image,
            genres,
            rating,
            added,
          };
          result.push(gameData);
        }
        if (result.length < 100) response = await axios.get(response.data.next);
      }
      // We send a maximum of 100 games.
      result.splice(result.length - DBGames.length);
      res.send(result);
    }
  } catch (error) {
    res.send(error.response);
  }
});

module.exports = videogamesRouter;
