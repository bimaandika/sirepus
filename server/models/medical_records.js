'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Medical_Record extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Medical_Record.belongsTo(models.Patient, { foreignKey: 'patient_id' })
      Medical_Record.belongsTo(models.Employee, { foreignKey: 'employee_id' })
      Medical_Record.hasMany(models.Medicine_Recipe, { foreignKey: 'medical_record_id' })
    }
  }
  Medical_Record.init({
    patient_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: { msg: `patient is require` },
        notNull: { msg: `patient is invalid` },
      }
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: { msg: `employee is require` },
        notNull: { msg: `employee is invalid` },
      }
    },
    anamnesis: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: { msg: `anamnesis is require` },
        notNull: { msg: `anamnesis is invalid` },
      }
    },
    diagnose: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: { msg: `diagnose is require` },
        notNull: { msg: `diagnose is invalid` },
      }
    },
    procedure: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: { msg: `procedure is require` },
        notNull: { msg: `procedure is invalid` },
      }
    },
    body_height: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: { msg: `body height is require` },
        notNull: { msg: `body height is invalid` },
      }
    },
    body_weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: { msg: `body weight is require` },
        notNull: { msg: `body weight is invalid` },
      }
    },
    blood_pressure: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: { msg: `blood pressure is require` },
        notNull: { msg: `blood pressure is invalid` },
      }
    },
    heart_rate: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: { msg: `heart rate is require` },
        notNull: { msg: `heart rate is invalid` },
      }
    },
    respiration_rate: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: { msg: `respiration rate is require` },
        notNull: { msg: `respiration rate is invalid` },
      }
    },
    temperature: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: { msg: `temperature is require` },
        notNull: { msg: `temperature is invalid` },
      }
    }
  }, {
    sequelize,
    modelName: 'Medical_Record',
  });
  return Medical_Record;
};