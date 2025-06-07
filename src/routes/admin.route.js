const express = require("express");
const adminRoute = express.Router();
const { authController } = require("../controllers/admin.controller");

adminRoute.post("/admin/login", authController);

module.exports = adminRoute;
