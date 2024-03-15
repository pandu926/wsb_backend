const { tagPivot, wisata, tag } = require("../database/models");

const get = async (id) => {
  if (typeof id == "undefined") {
    return tagPivot.findAll();
  }
  return tagPivot.findAll({
    where: { id },
  });
};

const getByTag = async (id_tag) => {
  return tagPivot.findAll({
    where: { id_tag },
    include: [
      {
        model: wisata, // Model Wisata
        as: "wisata",
      },
    ],
  });
};

const create = async (data_input) => {
  return tagPivot.create(data_input);
};
const update = async (id, data_input) => {
  return tagPivot.update(data_input, {
    where: { id },
  });
};
const remove = async (id) => {
  return tagPivot.destroy({
    where: { id },
  });
};

const service = { get, getByTag, update, create, remove };
module.exports = service;
