'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Family_Cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      family_card_id: {
        type: Sequelize.STRING
      },
      head_of_household: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      number_of_family_members: {
        type: Sequelize.INTEGER
      },
      number_family_folder: {
        type: Sequelize.STRING
      },
      registration_date: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Family_Cards');
  }
};