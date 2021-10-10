const { Videogame, conn, Genre } = require("../../src/db.js");
const { expect } = require("chai");
const videogame = {
  name: "Super Mario Bros",
  description: "Es un videojuego de plataformas desarrollado por Nintendo",
  released: "1985-11-13",
  platforms: "NES",
  genres: [11],
};

describe("Videogame model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe("game", () => {
      it("should throw an error if name, description or platforms are null", async () => {
        try {
          await Videogame.create({});
        } catch (error) {
          expect(error.message).to.eql(
            "notNull Violation: videogame.name cannot be null,\nnotNull Violation: videogame.description cannot be null,\nnotNull Violation: videogame.platforms cannot be null"
          );
        }
      });
      it("should work when its a valid game", async () => {
        const response = await Videogame.create(videogame);
        expect(response.dataValues).to.include.keys(
          "id",
          "name",
          "description",
          "released",
          "platforms",
          "rating",
          "background_image"
        );
        const createdGame = await Videogame.findOne({
          where: { name: videogame.name },
        });
        expect(createdGame.dataValues.description).to.eql(
          videogame.description
        );
      });
    });
  });
});

describe("Genre model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Genre.sync({ force: true }));
    describe("genre", () => {
      it("should work when its a valid genre", async () => {
        const response = await Genre.create({ name: "Action" });
        expect(response.dataValues).to.include.keys("name");
        expect(response.dataValues.name).to.eql("Action");
        const createdGenre = await Genre.findOne({ where: { name: "Action" } });
        expect(createdGenre.dataValues).to.eql({ id: 1, name: "Action" });
      });
    });
  });
});
