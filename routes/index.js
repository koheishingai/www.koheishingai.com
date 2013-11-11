


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

exports.codegarage = function(req, res){
  res.render('codegarage', { title: 'Express' });
};

io.sockets.on('connection', function (socket) {

socket.on('on', function (data) {
    console.log(data);
});

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
});



socket.on('worksinit', function (data) {
  require('worksa');
  console.log(worksanum);
  socket.emit('articleini', worksanum);
  if(data == 0){
    for(var i = 0; i <  3; i++){
      socket.emit('articleti', worksatitle[0][i+1]);
      
    }
    socket.emit('articleti0', worksatitle[0][1], worksatitle[0][3]);
  }else if(data == 1){
    for(var i = 3; i <  6; i++){
     socket.emit('articleti', worksatitle[0][i+1]);
    }
    socket.emit('articleti0', worksatitle[0][4], worksatitle[0][6]);
  }
delete require.cache[require.resolve('worksa')]
});

socket.on('cins', function (data) {
console.log('cins'+data);
  socket.emit('articlein', worksain[0][data+1], data);
});

});