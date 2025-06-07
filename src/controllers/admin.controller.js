require("dotenv");
const { authService } = require("../services/admin.service");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.authController = async (req, res) => {
  const { username, password } = req.body;
  const userData = await authService(username);
  if (!userData) {
    return res.status(404).send("not found");
  }

  const isPassword = await bcrypt.compare(password, userData.password);
  if (isPassword) {
    const token = await jwt.sign(
      {
        id: userData.id,
        usernmae: userData.username,
      },
      process.env.JWT_SECRET_TOKEN,
      {
        expiresIn: "1d",
      }
    );
    return res.status(200).json({
      accessToken: token,
    });
  } else {
    return res.status(403).send("UNAUTHORIZED");
  }
};
