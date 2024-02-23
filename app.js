require("dotenv").config();
const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

//route
const wisataRoute = require("./src/routes/wisata.route");
const gambarRoute = require("./src/routes/gambar.route");
const tagRoute = require("./src/routes/tag.route");
const tagPivotRoute = require("./src/routes/tagPivot.route");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use(wisataRoute);
app.use(tagRoute);
app.use(tagPivotRoute);
app.use(gambarRoute);

app.get("/", (req, res) => {
  return res.send("berhasil");
});

app.listen(port, () => {
  console.log("website listen in port " + port);
});
