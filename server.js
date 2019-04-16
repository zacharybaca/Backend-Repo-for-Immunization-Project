const express = require('express');
const server = express();

//Middleware
server.use(express.json());









server.listen(3000, () => {
    console.log('Listening to API on server port 3000');
});

module.exports = server;