const { admin } = require("../database/models");

module.exports.authService = async (username) => {
  return await admin.findOne({
    where: {
      username,
    },
  });
};
