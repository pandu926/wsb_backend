require("dotenv").config();
const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const path = require("path");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./src/config/swagger");

//route
const wisataRoute = require("./src/routes/wisata.route");
const gambarRoute = require("./src/routes/gambar.route");
const tagRoute = require("./src/routes/tag.route");
const tagPivotRoute = require("./src/routes/tagPivot.route");
const adminRoute = require("./src/routes/admin.route");

const https = require("https");

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(wisataRoute);
app.use(tagRoute);
app.use(tagPivotRoute);
app.use(gambarRoute);
app.use(adminRoute);

app.get("/", (req, res) => {
  return res.send("berhasil");
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
