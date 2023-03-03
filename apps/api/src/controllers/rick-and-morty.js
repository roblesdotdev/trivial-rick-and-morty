const { getFavs, addFav, deleteFav } = require("../database");
const { fetcher } = require("fetcher");

async function getCharacter(req, res) {
  const { id } = req.params;
  try {
    const data = await fetcher(`/character/${id}`);
    const info = {
      id: data.id,
      name: data.name,
      species: data.species,
      gender: data.gender,
      image: data.image,
    };
    return res.json(info);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
}

async function getCharacterDetail(req, res) {
  const { id } = req.params;
  try {
    const data = await fetcher(`/character/${id}`);
    const info = {
      name: data.name,
      status: data.status,
      species: data.species,
      gender: data.gender,
      origin: data.origin.name,
      image: data.image,
    };
    return res.json(info);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
}

function getFavList(req, res) {
  res.json(getFavs());
}

function addFavToList(req, res) {
  addFav(req.body);
  res.json({ status: "ok" });
}

function deleteFavFromList(req, res) {
  const { id } = req.params;
  deleteFav(parseInt(id));
  res.json({ status: "ok" });
}

module.exports = {
  getCharacter,
  getCharacterDetail,
  getFavList,
  addFavToList,
  deleteFavFromList,
};
