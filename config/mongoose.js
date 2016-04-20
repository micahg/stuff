module.exports = function() {
  var config = require('./config');
  var mongoose = require('mongoose');

  // company model import
  require('../app/models/company.server.model');

  var db_addr = 'mongodb://' + config.db_host + '/' + config.db_name;
  return mongoose.connect(db_addr);
};