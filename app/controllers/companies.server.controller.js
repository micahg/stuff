var Company = require('mongoose').model('Company');

exports.create = function(req, res, next) {
  console.log(req.body);

  // create the company from the request (json) post data
  var company = new Company(req.body);

  // save the data
  company.save(function(err) {
    if (err) {
      return next(err);
    }
    else {
      res.json(company);
    }
  });
};

exports.render = function(req, res, next) {
  // data to return to the ejs
  var data = { title : 'Companies' };
  data.subtitle = 'Some stuff'

  Company.find({}, function(err, companies) {
    if (err) {
      res.renter('companies', data);
    }
    else {
      data.companies = companies;
      data.stuff = 'hello';
      res.render('companies', data);
    }
  });
};

exports.log = function(req, res, next) {
  console.log('Company request was ' + req.url);
  next();
};