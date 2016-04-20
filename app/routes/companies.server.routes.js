module.exports = function(app) {
  var companies = require('../controllers/companies.server.controller');

  // form parsing stuff
  var bodyParser = require('body-parser');
  var multer = require('multer');
  var upload = multer();

  // for parsing application/json
  app.use(bodyParser.json());

  // for parsing application/x-www-form-
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/companies', companies.log, companies.render);
  app.post('/companies', upload.array(), companies.create);
};
