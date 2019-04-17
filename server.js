const express = require('express');
const server = express();
const knex = require('knex');
const dBConfig = require('./knexfile.js');
const db = knex(dBConfig.development);
const cors = require('cors');
//Middleware
server.use(express.json());











module.exports = server;