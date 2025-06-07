'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('wisata', 'tentang', {
      type: Sequelize.TEXT,
      allowNull: true,  // Sesuaikan dengan kebutuhan Anda
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('wisata', 'tentang', {
      type: Sequelize.STRING,
      allowNull: true,  // Sesuaikan dengan kebutuhan Anda
    });
  }
};

