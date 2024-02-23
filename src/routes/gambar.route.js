const express = require("express");
const gambarRoute = express.Router();
const conn = require("../controllers/gambar.controller");

gambarRoute.get("/gambar", (req, res) => {
  return res.send("gambar route");
});
gambarRoute.post("/gambar/add", conn.createController);
gambarRoute.get("/gambar/list", conn.getController);
gambarRoute.put("/gambar/update/:id", conn.updateController);
gambarRoute.delete("/gambar/delete/:id", conn.deleteController);

module.exports = gambarRoute;
