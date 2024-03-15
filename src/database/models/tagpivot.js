"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class tagPivot extends Model {
    static associate(models) {
      // Define association here
      tagPivot.belongsTo(models.wisata, {
        foreignKey: "id_wisata",
        as: "wisata",
      });
      tagPivot.belongsTo(models.tag, { foreignKey: "id_tag", as: "tag" });
    }
  }

  tagPivot.init(
    {
      id_wisata: DataTypes.INTEGER,
      id_tag: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "tagPivot",
    }
  );

  return tagPivot;
};
