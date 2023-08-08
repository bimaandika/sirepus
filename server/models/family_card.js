'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Family_Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Family_Card.init({
    family_card_id: DataTypes.STRING,
    head_of_household: DataTypes.STRING,
    address: DataTypes.STRING,
    number_of_family_members: DataTypes.INTEGER,
    number_family_folder: DataTypes.STRING,
    registration_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Family_Card',
  });
  return Family_Card;
};