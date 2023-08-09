'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Healthcare_Facility extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Healthcare_Facility.hasMany(models.Employee, { foreignKey: 'healthcare_facility_id' })
    }
  }
  Healthcare_Facility.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: { msg: `name is require` },
        notNull: { msg: `name is invalid` },
      }
    },
    room: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: { msg: `room is require` },
        notNull: { msg: `room is invalid` },
      }
    }
  }, {
    sequelize,
    modelName: 'Healthcare_Facility',
  });
  return Healthcare_Facility;
};