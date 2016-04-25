exports.render = function(req, res, next) {
  var path = require('path')
  res.sendFile('stuff.html', {root : path.join(__dirname, '../../public')});
};

exports.log = function(req, res, next) {
  console.log('Request was ' + req.url);
  next();
};