exports.render = function(req, res, next) {
  console.log('Rendering index...');
  res.render('index', {
    title : 'Hello World!'
  })
};

exports.log = function(req, res, next) {
  console.log('Request was ' + req.url);
  next();
};