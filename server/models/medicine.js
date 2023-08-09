'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Medicine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Medicine.hasMany(models.Medicine_Recipe, { foreignKey: 'medicine_id' })
    }
  }
  Medicine.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: { msg: `name is require` },
        notNull: { msg: `name is invalid` },
      }
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: { msg: `brand is require` },
        notNull: { msg: `brand is invalid` },
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: { msg: `type is require` },
        notNull: { msg: `type is invalid` },
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: { msg: `category is require` },
        notNull: { msg: `category is invalid` },
      }
    },
    unit: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: { msg: `unit is require` },
        notNull: { msg: `unit is invalid` },
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: { msg: `stock is require` },
        notNull: { msg: `stock is invalid` },
      }
    }
  }, {
    sequelize,
    modelName: 'Medicine',
  });
  return Medicine;
};