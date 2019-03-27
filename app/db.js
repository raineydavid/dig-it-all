"use strict";

require("mysql2");

const Sequelize = require("sequelize");

/*
 * Connect
 */

let sequelize;

module.exports.openConnection = () => {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: "mysql",
      pool: { max: 1, min: 0, acquire: 30000, idle: 1000 },
      operatorsAliases: false,
      logging: false
    }
  );
  return sequelize.authenticate().catch(err => {
    console.log(err);
    sequelize.close();
    throw err;
  });
};

module.exports.closeConnection = response =>
  sequelize
    .close()
    .then(() => response)
    .catch(err => {
      console.log(err);
      throw err;
    });

/*
 * Query
 */

module.exports.selectQuery = (query, replacements) =>
  sequelize.query(query, { replacements, type: Sequelize.QueryTypes.SELECT });
