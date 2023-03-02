let fav = [];

function getFavs() {
  return fav;
}

function addFav(character) {
  fav.push(character);
}

function deleteFav(id) {
  fav = fav.filter((character) => character.id !== id);
}

module.exports = {
  getFavs,
  addFav,
  deleteFav,
};
