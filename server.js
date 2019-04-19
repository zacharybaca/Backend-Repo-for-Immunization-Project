const express = require('express');
const server = express();
const knex = require('knex');
const dBConfig = require('./knexfile.js');
const db = knex(dBConfig.development);
const cors = require('cors');
const bcrypt = require('bcryptjs');
const Users = require('./database/users-model.js');
//Middleware
server.use(express.json());
server.use(cors());
//Endpoints
server.post('/api/addUser',  (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    Users.add(user)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json(error);
        });
});


     

        











module.exports = server;