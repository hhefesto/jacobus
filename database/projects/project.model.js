'use strict';
// External Modules -----------------------------------------------------
const mongoose = require('mongoose');

// My Modules -------------------------------------------------------
const projectSchema = require('./project.schema');

const Project = mongoose.model('Project', projectSchema);

Project.getProjects = (masterId, callback) => {
  const query = {masterId: masterId};
  Project.find(query, callback).sort({updated: -1}).select({
    _id: 1, name: 1, updated: 1
  });
};

Project.addProject = (body, callback) => {
  Project.create(body, callback);
};

Project.delete = (projectId, callback) => {
  Project.remove(projectId, callback);
};

module.exports = Project;