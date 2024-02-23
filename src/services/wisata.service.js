const { wisata } = require("../database/models");

const get = async (id) => {
  if (typeof id == "undefined") {
    return wisata.findAll();
  }
  return wisata.findAll({
    where: { id },
  });
};
const create = async (data_input) => {
  return wisata.create(data_input);
};
const update = async (id, data_input) => {
  return wisata.update(data_input, {
    where: { id },
  });
};
const remove = async (id) => {
  return wisata.destroy({
    where: { id },
  });
};

const service = { get, update, create, remove };
module.exports = service;
