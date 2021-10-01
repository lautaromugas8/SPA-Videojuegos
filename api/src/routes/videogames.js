require("dotenv").config();
const { Router } = require("express");
const axios = require("axios").default;
const { API_KEY } = process.env;
const { Videogame, Genre } = require("../db");
const { Op } = require("sequelize");

const videogamesRouter = Router();

//TODO: completar las rutas

videogamesRouter.get("/", async (req, res) => {
  let { name } = req.query;
  try {
    if (name) {
      let result = [];
      //name en minusculas, reemplaza espacios por "-"
      name = name.toLowerCase().replace(/\s/g, "-");
      //Busca juegos en la DB con name
      const DBGames = await Videogame.findAll({
        attributes: ["id", "name"],
        where: {
          name,
        },
        include: {
          model: Genre,
        },
      });
      //Si encuentra juegos, push a result
      if (DBGames.length > 0) {
        DBGames.forEach((v) => {
          result.push({
            id: v.dataValues.id,
            name: v.dataValues.name,
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

      if (data.length < 1) return res.send("No existe ningun videojuego");

      for (let i = 0; i < 15 - DBGames.length; i++) {
        const { id, name, background_image, genres } = data[i];
        const gameData = { id, name, background_image, genres };
        result.push(gameData);
      }
      res.send(result);
    } else {
      let result = [];
      //Busca todos los juegos en la DB
      const DBGames = await Videogame.findAll({
        attributes: ["id", "name"],
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
            genres: v.dataValues.genres.map((g) => {
              return { id: g.dataValues.id, name: g.dataValues.name };
            }),
          });
        });
      }

      let response = await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}`
      );
      let i = 0;
      while (result.length < 100) {
        for (let i = 0; i < 20 - DBGames.length; i++) {
          const { id, name, background_image, genres } =
            response.data.results[i];
          const gameData = { id, name, background_image, genres };
          result.push(gameData);
        }
        if (response.data.next) {
          const data = await axios.get(response.data.next);
          response = data;
        }
      }
      res.send(result);
    }
  } catch (error) {
    res.send(error.response);
  }
});

module.exports = videogamesRouter;
