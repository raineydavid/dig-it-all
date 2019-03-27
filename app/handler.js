"use strict";

const { openConnection, closeConnection, selectQuery } = require("./db");

/*
 * Response
 */

const makeResponse = (statusCode, response) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true
  },
  body: JSON.stringify(response)
});

const errorResponse = (error, callback) =>
  closeConnection().then(callback(null, makeResponse(500, error)));

/*
 * API
 */

module.exports.journalist = (event, context, callback) => {
  const { journalist } = event.pathParameters;
  const input = decodeURIComponent(journalist);
  const words = input.split(" ");
  const query =
    "SELECT * FROM Journalist WHERE nationality like '%" +
    words[2] +
    "%' AND skills like '%" +
    words[0] +
    "%'";

  openConnection()
    .then(() => selectQuery(query))
    .then(records => (records.length > 0 ? records : null))
    .then(closeConnection)
    .then(response => callback(null, makeResponse(200, response)))
    .catch(error => errorResponse(error, callback));
};
