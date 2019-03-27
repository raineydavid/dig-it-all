"use strict";

const fs = require("fs");
const path = require("path");
const chunk = require("lodash/chunk");

const mapRecordFields = record => ({
  name: record["name"],
  surname: record["surname"],
  document: record["document"],
  affiliation: record["affiliation"],
  email: record["email"],
  nationality: record["nationality"],
  jurisdiction: record["jurisdiction"],
  job: record["job"],
  subjects: record["subjects"],
  skills: record["skills"],
  platforms: record["platforms"]
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    const file = path.resolve("data", "data.json");
    const json = fs.readFileSync(file, "utf8");
    const data = JSON.parse(json);
    const chunks = chunk(data, 100);

    return chunks.reduce(
      (promise, records) =>
        promise.then(() =>
          queryInterface.bulkInsert(
            "Journalist",
            records.map(r => mapRecordFields(r)),
            {}
          )
        ),
      Promise.resolve()
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Journalist", null, {});
  }
};
