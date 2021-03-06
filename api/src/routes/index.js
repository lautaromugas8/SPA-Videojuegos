const { Router } = require("express");

// We import all the routers
const videogamesRouter = require("./videogames");
const videogameRouter = require("./videogame");
const genresRouter = require("./genres");

const router = Router();

// We configure all the routers
router.use("/videogames", videogamesRouter);
router.use("/videogame", videogameRouter);
router.use("/genres", genresRouter);

module.exports = router;
