'use strict';
// External Modules -----------------------------------------------------
const express = require('express');

// Definitions ---------------------------------------------------------
const router = express.Router();

// APIs ----------------------------------------------------------------
router.get('/register', (req, res, next) => {
  res.send('Register page');
});

router.get('/authenticate', (req, res, next) => {
  res.send('Authenticate page');
});

router.get('/profile', (req, res, next) => {
  res.send('Profile page');
});

// TODO verify if i really use this
router.get('/validate', (req, res, next) => {
  res.send('Validate page');
});

module.exports = router;