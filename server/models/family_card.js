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
      Family_Card.hasMany(models.Patient, { foreignKey: 'id_family' })
    }
  }
  Family_Card.init({
    family_card_id: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: { msg: `family id is require` },
        notNull: { msg: `family id is invalid` },
      }
    },
    head_of_household: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: { msg: `head of household is require` },
        notNull: { msg: `head of household is invalid` },
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: { msg: `address is require` },
        notNull: { msg: `address is invalid` },
      }
    },
    number_of_family_members: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: { msg: `number of family is require` },
        notNull: { msg: `number of family is invalid` },
      }
    },
    number_family_folder: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: { msg: `folder number is require` },
        notNull: { msg: `folder number is invalid` },
      }
    },
  }, {
    sequelize,
    modelName: 'Family_Card',
  });
  return Family_Card;
};