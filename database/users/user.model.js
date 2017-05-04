'use strict';
// External Modules -----------------------------------------------------
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// My own Modules -------------------------------------------------------
const userSchema = require('./user.schema');

const User = mongoose.model('User', userSchema);

User.getUserById = (id, callback) => User.findById(id, callback);

User.getUserByUsername = (username, callback) => {
  const query = {username: username};
  User.findOne(query, callback);
};

User.addUser = (body, callback) => {
  let newUser = new User(body);

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err)
        throw err;
      
      newUser.password = hash;
      newUser.save(callback);
    });
  });
};

User.comparePassword = (candidatePassword, hash, callback) => {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err)
      throw err;
    
    callback(null, isMatch);
  });
};

module.exports = User;