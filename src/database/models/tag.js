"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class tag extends Model {
    static associate(models) {
      // Define association here
      tag.belongsToMany(models.wisata, {
        through: "tagPivot",
        foreignKey: "id_tag",
        as: "wisatas",
      });
    }
  }

  tag.init(
    {
      nama: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tag",
    }
  );

  return tag;
};
