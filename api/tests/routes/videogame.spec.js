/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Videogame, conn, Genre } = require("../../src/db.js");

const agent = session(app);
const videogame = {
  name: "Super Mario Bros",
  description: "Es un videojuego de plataformas desarrollado por Nintendo",
  released: "1985-11-13",
  platforms: ["NES", "SNES"],
  genres: [11],
};

describe("Videogame routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  before(async () => {
    await Genre.sync({ force: true });
    await agent.get("/genres");
  });
  beforeEach(async () => await Videogame.sync({ force: true }));
  after(() => {
    Videogame.sync({ force: true });
    Genre.sync({ force: true });
  });
  describe("GET /videogames", () => {
    it("should get 200", async () => {
      const response = await agent.get("/videogames");
      expect(response.status).to.eql(200);
    });
    it("should return an array of length 100", async () => {
      const response = await agent.get("/videogames");
      expect(response.status).to.eql(200);
      expect(response.body.length).to.eql(100);
    });
  });
  describe("POST /videogame", () => {
    it("should get 201", async () => {
      const response = await agent.post("/videogame").send(videogame);
      expect(response.status).to.eql(201);
    });
    it("should add a game to the database", async () => {
      const response = await agent.post("/videogame").send(videogame);
      expect(response.status).to.eql(201);
      expect(response.text).to.eql("Videogame created");
      const gameInDB = await Videogame.findOne({
        where: { name: "super-mario-bros" },
      });
      expect(gameInDB.dataValues.description).to.eql(videogame.description);
    });
  });
  describe("GET /videogame/:id", () => {
    it("should get 200", async () => {
      const response = await agent.get("/videogame/51610");
      expect(response.status).to.eql(200);
    });
    it("should return with the data of the searched game", async () => {
      const response = await agent.get("/videogame/51610");
      expect(response.status).to.eql(200);
      expect(response.body).to.include.keys(
        "name",
        "released",
        "rating",
        "background_image",
        "description",
        "genres",
        "platforms"
      );
      expect(response.body.name).to.eql("Dark Souls: Remastered");
      expect(response.body.released).to.eql("2018-05-23");
      expect(response.body.rating).to.eql(4.42);
    });
  });
});
