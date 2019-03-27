"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "Journalist",
      {
        id: {
          primaryKey: true,
          autoIncrement: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING
        },
        surname: {
          type: Sequelize.STRING
        },
        document: {
          type: Sequelize.STRING
        },
        affiliation: {
          type: Sequelize.STRING
        },
        email: {
          type: Sequelize.STRING
        },
        nationality: {
          type: Sequelize.STRING
        },
        jurisdiction: {
          type: Sequelize.STRING
        },
        job: {
          type: Sequelize.STRING
        },
        subjects: {
          type: Sequelize.STRING
        },
        skills: {
          type: Sequelize.STRING
        },
        platforms: {
          type: Sequelize.STRING
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      }
      //{ indexes: [{ unique: true, fields: ['postcode'] }] }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Journalist");
  }
};
