const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const file = path.resolve('env.yml');
const yml = fs.readFileSync(file, 'utf8');
const config = yaml.safeLoad(yml);

module.exports = {
  development: {
    host: config.local.DB_HOST,
    database: config.local.DB_NAME,
    username: config.local.DB_USERNAME,
    password: config.local.DB_PASSWORD,
    dialect: 'mysql',
  },
  production: {
    host: config.prod.DB_HOST,
    database: config.prod.DB_NAME,
    username: config.prod.DB_USERNAME,
    password: config.prod.DB_PASSWORD,
    dialect: 'mysql',
  },
};
