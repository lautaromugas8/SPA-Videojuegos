require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

let sequelize;

if (process.env.NODE_ENV === "production") {
  sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    dialect: "postgres",
    host: DB_HOST,
    // port: 5432,
    // pool: {
    //   max: 3,
    //   min: 1,
    //   idle: 10000,
    // },
    // dialectOptions: {
    //   ssl: {
    //     require: true,
    //     rejectUnauthorized: false,
    //   },
    //   keepAlive: true,
    // },
    // ssl: true,
  });
} else {
  sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    {
      logging: false, // set to console.log to see the raw SQL queries
      native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    }
  );
}

const basename = path.basename(__filename);

const modelDefiners = [];

// We read all the files from the Models folder, request them and add them to the modelDefiners array.
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Inject connection (sequelize) to all models
modelDefiners.forEach((model) => model(sequelize));

// We capitalize the model names (i.e., genre => Genres)
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// All models are imported from sequelize.models as properties
const { Videogame, Genre } = sequelize.models;

// Relations/Associations
Videogame.belongsToMany(Genre, {
  through: "videogame_genres",
  foreignKey: "videogame_id",
});
Genre.belongsToMany(Videogame, {
  through: "videogame_genres",
  foreignKey: "genre_id",
});

module.exports = {
  Videogame,
  Genre,
  conn: sequelize, // To import connection(at index.js): const { conn } = require("./src/db.js");
};
