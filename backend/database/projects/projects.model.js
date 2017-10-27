'use strict';
// External Modules -----------------------------------------------------
const mongoose = require('mongoose');

// My Modules -------------------------------------------------------
const projectSchema = require('./project.schema');

const Project = mongoose.model('Project', projectSchema);

Project.getProjects = (masterId, callback) => {
  const query = {$or: [{masterId: masterId}, {evaluators: {$elemMatch: {_id: masterId}}}]};
  Project.find(query, callback).sort({updated: -1}).select({
    _id: 1, masterId:1, name: 1, updated: 1
  });
};

Project.getProjectById = (id, callback) => Project.findById(id, callback);

Project.addProject = (body, callback) => {
  Project.create(body, callback);
};

Project.saveProject = (id, project, callback) => Project.update({_id:id}, project, callback);

Project.delete = (projectId, callback) => {
  Project.remove(projectId, callback);
};

module.exports = Project;

