'use strict';
// External Modules -----------------------------------------------------
const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

// My own Modules ------------------------------------------------------
const User = require('../database/users/user.model');
const Project = require('../database/projects/project.model');
const config = require('../config/database');

// Definitions ---------------------------------------------------------
const router = express.Router();

// APIs ----------------------------------------------------------------
router.post('/register', (req, res, next) => {
  User.addUser(req.body, (err, user) => {
    if(err) {
      res.json({success: false, msg: 'Falla al registrar usuario'});
    }
    else {
      res.json({success: true, msg: 'Usuario registrado correctamente'});
    } 
  });
});

router.post('/authenticate', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.getUserByEmail(email, (err, user) => {
    if(err)
      throw err;

    if(!user){
      return res.json({success: false, msg: 'Usuario no encontrado'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err)
        throw err;
      
      if(isMatch){
        const token = jwt.sign(user, config.secret, {
          expiresIn: 86400 // 1 day
        });

        Project.getProjects(user._id, (err, projects) => {
          if(err)
            throw err;

          res.json({
            success: true,
            token: 'JWT '+token,
            user: {
              id: user._id,
              name: user.name,
              username: user.username,
              email: user.email
            },
            projects: projects
          });
        });
      }      
      
      else
        res.json({success: false, msg: 'Password incorrecto'});
    });
  });
});

router.get('/profile', passport.authenticate(
  'jwt',
  {session:false}),
  (req, res, next) => res.json({user: req.user})
);

module.exports = router;