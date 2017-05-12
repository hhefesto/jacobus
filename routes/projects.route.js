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
      Project.getProjects(req.body.masterId, (err, projects) => {
        res.json({
          success: true,
          msg: 'Proyecto creado correctamente',
          projects: projects
        });
      });
    } 
  });
});

router.post('/delete', (req, res, next) => {
  Project.delete(req.body.projectId, err => {
    if(err) {
      res.json({success: false, msg: 'Falla al eliminar proyecto'});
    }
    else {
      Project.getProjects(req.body.masterId, (err, projects) => {
        res.json({
          success: true,
          msg: 'Proyecto eliminado correctamente',
          projects: projects
        });
      });
    }  
  });
});

module.exports = router;