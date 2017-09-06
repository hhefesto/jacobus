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
        Project.getProjectById(projects[0].id, (err, project) => {
          res.json({
            success: true,
            msg: 'Proyecto creado correctamente',
            projects: projects,
            project: project
          });
        });
      });
    } 
  });
});

router.post('/load', (req, res, next) => {
  Project.getProjectById(req.body.id, (err, project) => {
    if(err) {
      res.json({success: false, msg: 'Falla al cargar proyecto'});
    }
    else {
      res.json({
        success: true,
        msg: 'Proyecto cargado correctamente',
        project: project
      });
    }
  });
});

router.post('/save', (req, res, next) => {
  Project.saveProject(req.body._id, req.body, (err) => {
    if(err) {
      res.json({success: false, msg: 'Falla al guardar el proyecto'});
    }
    else {
      res.json({success: true, msg: 'Proyecto guardado correctamente'});
    }
  })
});

router.post('/update', (req, res, next) => {
  Project.getProjectById(req.body.projectId, (err, project) => {
    if(err) {
        res.json({success: false, msg: 'Falla al actualizar proyecto'});
    }
    else {
      for (let evaluator of project.evaluators) {
        if(evaluator._id == req.body.evaluatorId){
          evaluator.criteriaComparisons = req.body.criteriaComparisons;
          evaluator.alternativesComparisons = req.body.alternativesComparisons;
          break;
        }
      }
      Project.saveProject(req.body.projectId, project, (err) => {
        if(err) {
          res.json({success: false, msg: 'Falla al actualizar el proyecto'});
        }
        else {
          res.json({success: true, msg: 'Proyecto actualizado correctamente'});
        }
      })  
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