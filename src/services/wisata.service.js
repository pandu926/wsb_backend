const { wisata, gambar } = require("../database/models");

const get = async (id) => {
  if (typeof id == "undefined") {
    return wisata.findAll({
      include: [
        {
          model: gambar, // Model Wisata
          as: "gambar",
        },
      ],
    });
  }
  return wisata.findAll({
    where: { id },
    include: [
      {
        model: gambar, // Model Wisata
        as: "gambar",
      },
    ],
  });
};
const create = async (data_input) => {
  return wisata.create(data_input);
};
const update = async (id, data_input) => {
  return wisata.update(data_input, {
    where: { id },
    returning: true, // Menambahkan opsi returning untuk mengembalikan hasil setelah pembaruan
  });
};
const remove = async (id) => {
  return wisata.destroy({
    where: { id },
  });
};

const service = { get, update, create, remove };
module.exports = service;
