"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "kategoris", // pastikan tabel kamu namanya "kategoris"
      [
        { nama: "Alam", createdAt: new Date(), updatedAt: new Date() },
        { nama: "Budaya", createdAt: new Date(), updatedAt: new Date() },
        { nama: "Kuliner", createdAt: new Date(), updatedAt: new Date() },
        { nama: "Religi", createdAt: new Date(), updatedAt: new Date() },
        { nama: "Pendidikan", createdAt: new Date(), updatedAt: new Date() },
        { nama: "Rekreasi", createdAt: new Date(), updatedAt: new Date() },
        { nama: "Sejarah", createdAt: new Date(), updatedAt: new Date() },
        { nama: "Agro Wisata", createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("kategoris", null, {});
  },
};
