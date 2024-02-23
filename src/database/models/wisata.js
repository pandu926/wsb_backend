'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wisata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  wisata.init({
    nama: DataTypes.STRING,
    tentang: DataTypes.STRING,
    tiket: DataTypes.INTEGER,
    alamat: DataTypes.STRING,
    link: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'wisata',
  });
  return wisata;
};