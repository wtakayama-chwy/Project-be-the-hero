const knex = require('knex');
const configuration = require('../../knexfile'); // use the configuration from your db

const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development; // Environment variable

const connection = knex(config); // Test which environment is being used dev or test

module.exports = connection;