const express = require("express");
const wisataRoute = express.Router();
const conn = require("../controllers/wisata.controller");

wisataRoute.get("/wisata", (req, res) => {
  return res.send("wisata route");
});
wisataRoute.post("/wisata/add", conn.createController);
wisataRoute.get("/wisata/list", conn.getController);
wisataRoute.put("/wisata/update/:id", conn.updateController);
wisataRoute.delete("/wisata/delete/:id", conn.deleteController);

module.exports = wisataRoute;
