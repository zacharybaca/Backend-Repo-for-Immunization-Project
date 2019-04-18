const express = require('express');
const server = express();
const knex = require('knex');
const dBConfig = require('./knexfile.js');
const db = knex(dBConfig.development);
const cors = require('cors');
//Middleware
server.use(express.json());
server.use(cors());
//Endpoints
server.post('/api/addUser', async (req, res) => {
    try {
        const user = await db('patients_table').insert(req.body);
        res.status(201).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error Adding User',
        });
    }
});











module.exports = server;