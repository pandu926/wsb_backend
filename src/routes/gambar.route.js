const express = require("express");
const gambarRoute = express.Router();
const conn = require("../controllers/gambar.controller");
const upload = require("../utils/upload");

gambarRoute.get("/gambar", (req, res) => {
  return res.send("gambar route");
});
gambarRoute.post(
  "/gambar/add",
  upload.fields([
    { name: "gambar1", maxCount: 1 },
    { name: "gambar2", maxCount: 1 },
    { name: "gambar3", maxCount: 1 },
    { name: "gambar4", maxCount: 1 },
  ]),
  conn.upload
);
gambarRoute.get("/gambar/list", conn.getController);
gambarRoute.put("/gambar/update/:id", conn.updateController);
gambarRoute.delete("/gambar/delete/:id", conn.deleteController);

module.exports = gambarRoute;
