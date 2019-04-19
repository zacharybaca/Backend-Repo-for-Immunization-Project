const express = require('express');
const server = express();
const knex = require('knex');
const dBConfig = require('./knexfile.js');
const db = knex(dBConfig.development);
const cors = require('cors');
const bcrypt = require('bcryptjs');
const Users = require('./database/users-model.js');
const jwt = require('jsonwebtoken');
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

server.post('/api/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({
                    message: 'Welcome ${user}!',
                    token
                });
            } else {
                res.status(401).json({ message: 'Invalid Credentials' });
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    };
    const secret = require('./secrets.js').jwtSecret;
    const options = {
        expiresIn: '1h'
    }

    return jwt.sign(payload, secret, options);
}


     

        











module.exports = server;