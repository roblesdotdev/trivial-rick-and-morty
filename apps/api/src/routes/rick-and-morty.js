const express = require("express");
const {
  getCharacter,
  getCharacterDetail,
  getFavList,
  addFavToList,
  deleteFavFromList,
} = require("../controllers/rick-and-morty");

function getRickAndMortyRoutes() {
  const router = express();

  router.route("/character/:id").get(getCharacter);
  router.route("/detail/:id").get(getCharacterDetail);
  router.route("/fav").get(getFavList).post(addFavToList);
  router.route("/fav/:id").post(deleteFavFromList);

  return router;
}

module.exports = getRickAndMortyRoutes;
