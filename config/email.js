'use strict';
module.exports = {
  service: 'gmail',
  type: 'OAuth2',
  user: 'decision.app.register@gmail.com',
  clientId: '212427173467-kc1rondiqj04jb7u0ha5535i9enjv5ka.apps.googleusercontent.com',
  clientSecret: '9QRYmGkuxkQJHcAYWbXIDCUW',
  refreshToken: '1/fJp_COoNlLcuYVpjUQTQ2hq_N8fGCZdPD-6UOHxlBuQ',
  dashboardMessage : {
    from: 'decision.app.register@gmail.com',
    to: 'decision.app.register@gmail.com',
    subject: 'Nuevo usuario registrado',
    text: ''
  },
  notificationMessage: {
    from: 'Decision App',
    to: '',
    subject: 'Gracias por registrarte a Decision App',
    text: 'Bienvenido.\rGracias por registrarte a Decision App, ya puedes iniciar sesión y comenzar a utilizar la plataforma.'
  }
};