"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class gambar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  gambar.init(
    {
      id_wisata: DataTypes.INTEGER,
      gambar1: DataTypes.STRING,
      gambar2: DataTypes.STRING,
      gambar3: DataTypes.STRING,
      gambar4: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "gambar",
    }
  );
  return gambar;
};
