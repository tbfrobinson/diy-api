'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class thing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  thing.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    backstory: DataTypes.STRING,
    reference: DataTypes.BOOLEAN,
    ifyes: DataTypes.STRING,
    image: DataTypes.STRING,
    estimatedheight: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'thing',
  });
  return thing;
};