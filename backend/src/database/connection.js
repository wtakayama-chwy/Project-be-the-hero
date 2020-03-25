const knex = require('knex');
const configuration = require('../../knexfile'); // use the configuration from your db

const connection = knex(configuration.development);

module.exports = connection;