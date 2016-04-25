module.exports = function() {
  var express = require('express');
  var app = express();

  app.set('views', './app/views');
  app.set('view engine', 'ejs');

  app.use(express.static('public'));

  require('../app/routes/index.server.routes.js')(app);
  require('../app/routes/companies.server.routes.js')(app);

  return app;
};
