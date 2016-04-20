module.exports = function() {
  var app = require('express')();

  app.set('views', './app/views');
  app.set('view engine', 'ejs');

  require('../app/routes/index.server.routes.js')(app);
  require('../app/routes/companies.server.routes.js')(app);

  return app;
};
