'use strict';
// External Modules -----------------------------------------------------
const express = require('express');

// My own Modules ------------------------------------------------------
const User = require('../models/user');

// Definitions ---------------------------------------------------------
const router = express.Router();

// APIs ----------------------------------------------------------------
router.post('/register', (req, res, next) => {
/*  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });*/

  User.addUser(req.body, (err, user) => {
    if(err) {
      res.json({success: false, msg: 'Failed to register user'});
    }
    else {
      res.json({success: true, msg: 'User registered'});
    } 
  });
});

router.post('/authenticate', (req, res, next) => {
  res.send('Authenticate page');
});

router.get('/profile', (req, res, next) => {
  console.log('Enviando Profile');
  res.send('Profile page');
});

module.exports = router;