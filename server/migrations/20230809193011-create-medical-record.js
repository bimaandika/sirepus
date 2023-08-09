'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Medical_Records', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      patient_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
        references: {
          model: "Patients",
          key: "id"
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      employee_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
        references: {
          model: "Employees",
          key: "id"
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      anamnesis: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        }
      },
      diagnose: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        }
      },
      procedure: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        }
      },
      body_height: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        }
      },
      body_weight: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        }
      },
      blood_pressure: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        }
      },
      heart_rate: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        }
      },
      respiration_rate: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        }
      },
      temperature: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Medical_Records');
  }
};