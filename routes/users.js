'use strict';
// External Modules -----------------------------------------------------
const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

// My own Modules ------------------------------------------------------
const User = require('../models/user');
const config = require('../config/database');

// Definitions ---------------------------------------------------------
const router = express.Router();

// APIs ----------------------------------------------------------------
router.post('/register', (req, res, next) => {
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
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if(err)
      throw err;

    if(!user){
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err)
        throw err;
      
      if(isMatch){
        const token = jwt.sign(user, config.secret, {
          expiresIn: 86400 // 1 day
        });

        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      }      
      
      else
        res.json({success: false, msg: 'Wrong password'});
    });
  });
});

router.get('/profile', passport.authenticate(
  'jwt',
  {session:false}),
  (req, res, next) => res.json({user: req.user})
);

module.exports = router;