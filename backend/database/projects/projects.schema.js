'use strict';
// External Modules -----------------------------------------------------
const mongoose = require('mongoose');

// Project schema -------------------------------------------------------
const projectSchema = mongoose.Schema({
  masterId: {
    type: String,
    require: true
  },
  name: {
    type: String,
  },
  alternatives: [{
    _id : false,
    num: Number,
    name: String,
    description: String,
  }],
  criteria: [{
    _id: false,  
    num: Number,
    name: String,
    description: String
  }],
  criteriaComparisons: [Number],
  alternativesComparisons: [[Number]],
  updated: {
    type: Date,
    default: Date.now
  },
  evaluators: [{
    status: {
      type: Boolean,
      default: false
    },
    criteriaComparisons: [Number],
    alternativesComparisons: [[Number]],
  }]
});

projectSchema.set('versionKey', false);
module.exports = projectSchema;

