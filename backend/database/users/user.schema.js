'use strict';
// External Modules -----------------------------------------------------
const mongoose = require('mongoose');

// User schema ----------------------------------------------------------
const userSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

userSchema.set('versionKey', false);
module.exports = userSchema;

