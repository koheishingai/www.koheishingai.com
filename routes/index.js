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

io.sockets.on('connection', function (socket) {
socket.emit('examples', 'aaa');
socket.on('on', function (data) {
    console.log(data);
});
});