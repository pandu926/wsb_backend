const service = require("../services/wisata.service");

const getController = async (req, res) => {
  const { id } = req.query;
  if (typeof id == "undefined") {
    const response = await service.get();
    return res.status(200).json(response);
  }
  const response = await service.get(id);
  return res.status(200).json(response);
};

const createController = async (req, res) => {
  const data_input = req.body;
  const response = await service.create(data_input);
  if (response) {
    return res.status(200).json(response);
  }
  return res.status(400).json("failed");
};

const updateController = async (req, res) => {
  const { id } = req.params;
  const data_input = req.body;
  const checkData = await service.get(id);
  if (checkData == 0) {
    return res.send("data tidak ada");
  }
  const response = await service.update(id, data_input);
  console.log(response);
  if (response) {
    return res.status(200).json(response);
  }
  return res.status(400).json("failed");
};
const deleteController = async (req, res) => {
  const { id } = req.params;
  const response = await service.remove(id);
  if (response) {
    return res.status(200).json("sukses");
  }
  return res.status(400).json("failed");
};

const conn = {
  getController,
  createController,
  updateController,
  deleteController,
};

module.exports = conn;
