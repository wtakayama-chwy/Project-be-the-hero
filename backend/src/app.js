/* Routes and resources */

/* 
* HTTP METHODS:
* GET: Search/list a info on back-end
* POST: Create a info on back-end
* PUT: Alterate --
* DELETE: Delete --
*/

/*
* PARAMETHERS
* 1) Query params: For (filters & paginations) Example: app.get('/users?name=Will) - Named Paramethers send on your route after "?" - GET
* 2) Route params: For (identify resources) - resource = '/users/:id' - insomnia must search '/users/1' - DELETE
* 3) Request Body: For (create or alterate a resource) - POST
* Resource params: 
*/

/* DATABASES:
* SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server - SQL = format to communicate
* NoSQL: MongoDB, CouchDB, etc
* Ways to communicate: 
* 1) Driver: SELECT * FROM users
* 2) Query Builder: queries with JS - table('users').select('*') - KNEX.JS 
    * ENTITIES :
    * a) ONG
    * b) incident (cases)
    * FUNCTIONALITIES :
    * a) Login - OK
    * b) Sing up 
    * c) Logout - frontend
    * d) Sing up new incidents - OK
    * e) Delete incidents (cases) - OK
    * f) List the incidents - OK
    * g) List ALL incidents - OK
    * h) Contact the ONG - frontend
*/

// Store the whole functionalities of express
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errors } = require('celebrate');

// Stores your application
const app = express();

app.use(cors()); // For Production - ({ origin: 'http://meuapp.com' })
// Before any request (Get, post, etc), ask express to transform the json to a object  
app.use(express.json());
app.use(routes); // Use src/routes on your application
app.use(errors());

// Node will run in :3333
    // app.listen(3333); - Tests vs Dev 

module.exports = app;

