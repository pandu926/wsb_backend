const express = require("express");
const wisataRoute = express.Router();
const conn = require("../controllers/wisata.controller");
const tokenVerification = require("../middleware/tokenVerification");

wisataRoute.get("/wisata", (req, res) => {
  return res.send("wisata route");
});
wisataRoute.post("/wisata/add", tokenVerification, conn.createController);
wisataRoute.get("/wisata/list", conn.getController);
wisataRoute.put("/wisata/update/:id", tokenVerification, conn.updateController);
wisataRoute.delete(
  "/wisata/delete/:id",
  tokenVerification,
  conn.deleteController
);

module.exports = wisataRoute;
