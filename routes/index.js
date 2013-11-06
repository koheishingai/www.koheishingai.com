var io = require('socket.io').listen(8081);

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.about = function(req, res){
  res.render('about', { title: 'Express' });
};

exports.works = function(req, res){
  res.render('works', { title: 'Express' });
};

exports.collections = function(req, res){
  res.render('collections', { title: 'Express' });
};

exports.article = function(req, res){
  res.render('article', { title: 'Express' });
};

exports.enindex = function(req, res){
  res.render('enindex', { title: 'Express' });
};

exports.enabout = function(req, res){
  res.render('enabout', { title: 'Express' });
};

exports.enworks = function(req, res){
  res.render('enworks', { title: 'Express' });
};

exports.encollections = function(req, res){
  res.render('encollections', { title: 'Express' });
};

exports.enarticle = function(req, res){
  res.render('enarticle', { title: 'Express' });
};


io.sockets.on('connection', function (socket) {
socket.emit('examples', 'aaa');
socket.on('on', function (data) {
    console.log(data);
});
});