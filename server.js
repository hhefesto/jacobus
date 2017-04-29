'use strict';
// External Modules -----------------------------------------------------
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

// My own Modules ------------------------------------------------------
const users = require('./routes/users');
const config = require('./config/database');

// Definitions----------------------------------------------------------
const server = express();
const port = 3000;

// Middleware ----------------------------------------------------------
// Development. Allows to run Frontend on different port
server.use(cors());

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));

// Set static folder. Public ng build output
server.use(express.static(path.join(__dirname, 'public')));

server.use('/users', users);

// I'd like to move it to its own database module
mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
  console.log('Connected to database ' + config.database);
});
mongoose.connection.on('error', (err) => {
  console.log('Database error ' + err);
});

// APIs ----------------------------------------------------------------
server.listen(port, () => console.log('Server listen on port ' + port));

// TODO Delete this line, it is not needed
//server.get('/', (req, res) => res.send('Root page'));