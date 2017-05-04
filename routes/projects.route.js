'use strict';
// External Modules -----------------------------------------------------
const express = require('express');

// My own Modules ------------------------------------------------------
const Project = require('../database/projects/project.model');

// Definitions ---------------------------------------------------------
const router = express.Router();

// APIs ----------------------------------------------------------------
router.post('/create', (req, res, next) => {
  Project.addProject(req.body, (err, project) => {
    if(err) {
      res.json({success: false, msg: 'Falla al crear proyecto'});
    }
    else {
      res.json({success: true, msg: 'Proyecto creado correctamente'});
    }
  });
});

module.exports = router;