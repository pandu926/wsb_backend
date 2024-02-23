const { tag } = require("../database/models");

const get = async (id) => {
  if (typeof id == "undefined") {
    return tag.findAll();
  }
  return tag.findAll({
    where: { id },
  });
};
const create = async (data_input) => {
  return tag.create(data_input);
};
const update = async (id, data_input) => {
  return tag.update(data_input, {
    where: { id },
  });
};
const remove = async (id) => {
  return tag.destroy({
    where: { id },
  });
};

const service = { get, update, create, remove };
module.exports = service;
