'use strict';
// External Modules -----------------------------------------------------
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const mongoose = require('mongoose');

// My own Modules ------------------------------------------------------
const usersRoute = require('./routes/users.route');
const projectsRoute = require('./routes/projects.route')
const config = require('./config/database');

// Definitions----------------------------------------------------------
const server = express();
let port = process.env.PORT || 8080;

// I'd like to move it to its own database module
mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
  console.log('Connected to database ' + config.database);
});
mongoose.connection.on('error', (err) => {
  console.log('Database error ' + err);
});

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$ DEP Developmen section, comment on Deployment $$$$$$$$$$$$$
/* const cors = require('cors');
server.use(cors());
port = 3001;*/ 
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// Middleware ----------------------------------------------------------
// Set static folder. public is the "ng build" command output
server.use(express.static(path.join(__dirname, 'public')));

server.use(bodyParser.json());

server.use(passport.initialize());
server.use(passport.session());
require('./config/passport')(passport);

server.use('/users', usersRoute);
server.use('/projects', projectsRoute);

// Default route -------------------------------------------------------
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start server --------------------------------------------------------
server.listen(port, () => console.log('Server listen on port ' + port));