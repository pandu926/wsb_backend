const express = require("express");
const tagRoute = express.Router();
const conn = require("../controllers/tag.controller");

tagRoute.get("/tag", (req, res) => {
  return res.send("tag route");
});
tagRoute.post("/tag/add", conn.createController);
tagRoute.get("/tag/list", conn.getController);
tagRoute.put("/tag/update/:id", conn.updateController);
tagRoute.delete("/tag/delete/:id", conn.deleteController);

module.exports = tagRoute;
