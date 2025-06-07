"use strict";

const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash("pandu99", 10); // hash password 'pandu99' dengan saltRounds 10

    await queryInterface.bulkInsert(
      "admins",
      [
        {
          id: 1,
          username: "pandusu",
          password: hashedPassword, // simpan hash di database
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("admins", { id: 2 }, {});
  },
};
