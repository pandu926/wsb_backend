const service = require("../services/gambar.service");

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
  const response = await service.update(id);
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

const upload = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  const { id_wisata } = req.body;
  console.log(id_wisata);

  // Menampilkan nama-nama file yang diunggah
  const filenames = {};
  for (const field in req.files) {
    filenames[field] = req.files[field][0].filename;
  }

  const response = await service.create(filenames, id_wisata);
  if (response) {
    return res.status(200).json(response);
  }
  return res.status(400).json("failed");
};

const conn = {
  upload,
  getController,
  createController,
  updateController,
  deleteController,
};

module.exports = conn;
