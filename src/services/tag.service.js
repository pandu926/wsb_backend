const { tag } = require("../database/models");

const get = async (id) => {
  if (typeof id == "undefined") {
    return tag.findAll();
  }
  return tag.findAll({
    where: { id },
  });
};

const getDataByName = async (nama) => {
  return tag.findAll({
    where: { nama },
  });
};
const create = async (data_input) => {
  return tag.create(data_input);
};
const update = async (id, data_input) => {
  return tag.update(data_input, {
    where: { id },
    returning: true,
  });
};
const remove = async (id) => {
  return tag.destroy({
    where: { id },
  });
};

const service = { get, update, create, remove, getDataByName };
module.exports = service;
