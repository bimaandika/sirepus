'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Patient.belongsTo(models.Family_Card, { foreignKey: 'id_family' })
      Patient.hasMany(models.Medical_Record, { foreignKey: 'patient_id' })
    }
  }
  Patient.init({
    id_family: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: { msg: `id family is require` },
        notNull: { msg: `id family is invalid` },
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
    medicalcare_id: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: { msg: `medicalcare id is require` },
        notNull: { msg: `medicalcare id is invalid` },
      }
    },
    assurance_id: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: { msg: `name is require` },
        notNull: { msg: `name is invalid` },
      }
    },
    birth_of_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate:{
        notEmpty: { msg: `birth of date is require` },
        notNull: { msg: `birth of date is invalid` },
      }
    },
    religion: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: { msg: `religion is require` },
        notNull: { msg: `religion is invalid` },
      }
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: { msg: `gender is require` },
        notNull: { msg: `gender is invalid` },
      }
    },
    occupation: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: { msg: `occupation is require` },
        notNull: { msg: `occupation is invalid` },
      }
    },
    domicile: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: { msg: `domicile is require` },
        notNull: { msg: `domicile is invalid` },
      }
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: { msg: `age is require` },
        notNull: { msg: `age is invalid` },
      }
    },
    education: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: { msg: `education is require` },
        notNull: { msg: `education is invalid` },
      }
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: { msg: `phone_number is require` },
        notNull: { msg: `phone_number is invalid` },
      }
    },
    ethnic: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: { msg: `ethnic is require` },
        notNull: { msg: `ethnic is invalid` },
      }
    },
    marital_status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: { msg: `marital_status is require` },
        notNull: { msg: `marital_status is invalid` },
      }
    },
    alergy: {
      type: DataTypes.STRING,
    },
    previous_disease: {
      type: DataTypes.STRING,
    },
    family_disease: {
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};