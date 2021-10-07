require("dotenv").config();
const { Router } = require("express");
const axios = require("axios").default;
const { API_KEY } = process.env;
const { Videogame, Genre } = require("../db");

const videogamesRouter = Router();

videogamesRouter.get("/", async (req, res) => {
  let { name } = req.query;
  try {
    if (name) {
      let result = [];
      //name en minusculas, reemplaza espacios por "-"
      name = name.toLowerCase().replace(/\s/g, "-");
      //Busca juegos en la DB con ese name
      const DBGames = await Videogame.findAll({
        attributes: ["id", "name", "rating"],
        where: {
          name,
        },
        include: {
          model: Genre,
        },
      });
      //Si encuentra juegos, push a result
      if (DBGames.length) {
        DBGames.forEach((v) => {
          result.push({
            id: v.dataValues.id,
            name: v.dataValues.name,
            rating: v.dataValues.rating,
            genres: v.dataValues.genres.map((g) => {
              return { id: g.dataValues.id, name: g.dataValues.name };
            }),
          });
        });
      }

      //Juegos de la API
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
      //Busca todos los juegos en la DB
      const DBGames = await Videogame.findAll({
        attributes: ["id", "name", "rating"],
        include: {
          model: Genre,
        },
      });
      //Si hay juegos, push a result
      if (DBGames.length > 0) {
        DBGames.forEach((v) => {
          result.push({
            id: v.dataValues.id,
            name: v.dataValues.name,
            rating: v.dataValues.rating,
            genres: v.dataValues.genres.map((g) => {
              return { id: g.dataValues.id, name: g.dataValues.name };
            }),
          });
        });
      }
      let response = await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}`
      );
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
      //Solo enviamos 100 juegos
      result.splice(result.length - DBGames.length);
      res.send(result);
    }
  } catch (error) {
    res.send(error.response);
  }
});

module.exports = videogamesRouter;
