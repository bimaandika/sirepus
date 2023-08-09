'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Medicine_Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Medicine_Recipe.belongsTo(models.Medicine, { foreignKey: 'medicine_id' })
      Medicine_Recipe.belongsTo(models.Medical_Record, { foreignKey: 'medical_record_id' })
    }
  }
  Medicine_Recipe.init({
    medical_record_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: { msg: `medical record is require` },
        notNull: { msg: `medical record is invalid` },
      }
    },
    medicine_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: { msg: `medicine is require` },
        notNull: { msg: `medicine is invalid` },
      }
    },
    dose: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: { msg: `dose is require` },
        notNull: { msg: `dose is invalid` },
      }
    }
  }, {
    sequelize,
    modelName: 'Medicine_Recipe',
  });
  return Medicine_Recipe;
};