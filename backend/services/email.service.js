'use strict';
// External Modules -----------------------------------------------------
const nodemailer = require('nodemailer');

// My Modules ------------------------------------------------------
const emailAccount = require('../config/email');

const transporter = nodemailer.createTransport({
  service: emailAccount.service,
  auth: {
    type: emailAccount.type,
    user: emailAccount.user,
    clientId: emailAccount.clientId,
    clientSecret: emailAccount.clientSecret,
    refreshToken: emailAccount.refreshToken
  },
});

module.exports.send = (message, callback) => {
  transporter.sendMail(message, callback);
}

