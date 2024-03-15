"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class wisata extends Model {
    static associate(models) {
      // Define associations here
      wisata.hasOne(models.gambar, { foreignKey: "id_wisata", as: "gambar" });
      wisata.belongsToMany(models.tag, {
        through: "tagPivot",
        foreignKey: "id_wisata",
        as: "tags",
      });
    }
  }

  wisata.init(
    {
      nama: DataTypes.STRING,
      tentang: DataTypes.STRING,
      tiket: DataTypes.INTEGER,
      alamat: DataTypes.STRING,
      link: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "wisata",
    }
  );

  return wisata;
};
