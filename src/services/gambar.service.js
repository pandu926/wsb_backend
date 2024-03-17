const { gambar } = require("../database/models");

const get = async (id) => {
  if (typeof id == "undefined") {
    return gambar.findAll();
  }
  return gambar.findAll({
    where: { id },
  });
};
const create = async (filename, id_wisata) => {
  const { gambar1, gambar2, gambar3, gambar4 } = filename;
  return gambar.create({ id_wisata, gambar1, gambar2, gambar3, gambar4 });
};
const update = async (id, data_input) => {
  return gambar.update(data_input, {
    where: { id },
    returning: true,
  });
};
const remove = async (id) => {
  return gambar.destroy({
    where: { id },
  });
};

const service = { get, update, create, remove };
module.exports = service;
