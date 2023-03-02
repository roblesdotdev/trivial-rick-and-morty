const express = require("express");
const getRickAndMortyRoutes = require("./rick-and-morty");

function getApiRoutes() {
  const router = express.Router();

  router.use("/healthcheck", (req, res) => res.send({ status: "Alive" }));

  router.use("/rickandmorty", getRickAndMortyRoutes());

  router.use(function (_req, res) {
    res
      .status(404)
      .json({ error: { message: "Sorry! Could not found page." } });
  });

  return router;
}

module.exports = getApiRoutes;
