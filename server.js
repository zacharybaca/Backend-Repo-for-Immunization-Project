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

server.post('/api/patientInfo', async (req, res) => {
    try {
        const user = db('patients_table');
        if (user) {
            const patientInfo = await db('patient_info_table').insert(req.body);
            res.status(201).json(patientInfo);
        } else {
            res.status(404).json({ message: 'User Not Found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error retrieving user' });
    }
});
     

        











module.exports = server;