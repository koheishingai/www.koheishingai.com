var io = require('socket.io').listen(8080);
exports.index = function(req, res){res.render('index', { title: 'Express' });};
exports.about = function(req, res){res.render('about', { title: 'Express' });};
exports.works = function(req, res){res.render('works', { title: 'Express' });};
exports.collections = function(req, res){res.render('collections', { title: 'Express' });};
exports.article = function(req, res){res.render('article', { title: 'Express' });};
exports.enindex = function(req, res){res.render('enindex', { title: 'Express' });};
exports.enabout = function(req, res){res.render('enabout', { title: 'Express' });};
exports.enworks = function(req, res){res.render('enworks', { title: 'Express' });};
exports.encollections = function(req, res){res.render('encollections', { title: 'Express' });};
exports.enarticle = function(req, res){res.render('enarticle', { title: 'Express' });};
exports.codegarage = function(req, res){res.render('codegarage', { title: 'Express' });};
exports.stickup = function(req, res){res.render('stickup', { title: 'Express' });};
exports.register = function(req, res){res.render('register', { title: 'Express' });};
exports.thread = function(req, res){res.render('thread', { title: 'Express' });};
exports.codegaragestick = function(req, res){res.render('codegaragestick', { title: 'Express' });};
exports.codegarages = function(req, res){res.render('codegarages', { title: 'Express' });};
io.sockets.on('connection', function (socket) {
  socket.on('on', function (data) {});
  socket.on('cgsin', function (data) {
  cgsflg = 0;
  hash = data.replace("#","");
  require('codeg');
  socket.emit('cdgout', codegout);
  delete require.cache[require.resolve('codeg')]
});
socket.on('publishit', function (data, rand) {
  cgsflg = 1;
  codegins = data;
  randid = rand.replace("#","");
  require('codeg');
  delete require.cache[require.resolve('codeg')]
  socket.emit('done');
});
socket.on('wgetc', function (data) {
  wkaflg = 0;
  require('worksa');
  socket.emit('wkcon', worksacon[0][data]);
  delete require.cache[require.resolve('worksa')]
});
socket.on('cgetc', function (data) {
  colflg = 0;
  require('col');
  socket.emit('ccon', colcon[0][data]);
  delete require.cache[require.resolve('col')]
});
socket.on('arinit', function(){
  arflg = 1;
  require('ar');
  for(var i = 0; i <  arnum; i++){socket.emit('arti', artitle[0][i+1], i, arin[0][i+1]);}
  delete require.cache[require.resolve('ar')]
});
socket.on('colinit', function(){
  colflg = 1;
  require('col');
  for(var i = 0; i <  3; i++){socket.emit('colti', coltitle[0][i+1], i, colin[0][i+1]);}
  delete require.cache[require.resolve('col')]
});
socket.on('worksinit', function (data) {
  wkaflg = 1;
  require('worksa');
  socket.emit('articleini', worksanum);
  if(data == 0){
    for(var i = 0; i <  3; i++){socket.emit('articleti', worksatitle[0][i+1]);}
    socket.emit('articleti0', worksatitle[0][1], worksatitle[0][3]);
  }else if(data == 1){
    for(var i = 3; i <  6; i++){socket.emit('articleti', worksatitle[0][i+1]);}
    socket.emit('articleti0', worksatitle[0][4], worksatitle[0][6]);
  }
  delete require.cache[require.resolve('worksa')]
});
socket.on('cins', function (data) {
  socket.emit('articlein', worksain[0][data+1], data);
});
});