'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Employee.hasMany(models.Healthcare_Facility, { foreignKey: 'healthcare_facility_id' })
      Employee.hasMany(models.Medical_Record, { foreignKey: 'employee_id' })
    }
  }
  Employee.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: { msg: `name is require` },
        notNull: { msg: `name is invalid` },
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
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: { msg: `phone number is require` },
        notNull: { msg: `phone number is invalid` },
      }
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: { msg: `position is require` },
        notNull: { msg: `position is invalid` },
      }
    },
    identity_id: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: { msg: `identity id is require` },
        notNull: { msg: `identity id is invalid` },
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: { msg: `password is require` },
        notNull: { msg: `password is invalid` },
      }
    },
    healthcare_facility_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: { msg: `healthcare facility id is require` },
        notNull: { msg: `healthcare facility id is invalid` },
      }
    }
  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};