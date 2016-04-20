var mongoose = require('mongoose');

var CompanySchema = new mongoose.Schema({
  name: String,
  website: String,
  username: String,
  password: String,
});

mongoose.model('Company', CompanySchema);