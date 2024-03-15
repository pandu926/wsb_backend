const express = require("express");
const tagPivotRoute = express.Router();
const conn = require("../controllers/tagPivot.controller");

tagPivotRoute.get("/tagPivot", (req, res) => {
  return res.send("tagPivot route");
});
tagPivotRoute.post("/tagPivot/add", conn.createController);
tagPivotRoute.get("/tagPivot/list", conn.getController);
tagPivotRoute.get("/tagPivot/list/:id_tag", conn.getByTagController);
tagPivotRoute.put("/tagPivot/update/:id", conn.updateController);
tagPivotRoute.delete("/tagPivot/delete/:id", conn.deleteController);

module.exports = tagPivotRoute;
