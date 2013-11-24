var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

codegins = '';
randid = '';
hash = '';
codegout = '';
worksanum = 0;
cgsflg = 0;
wkaflg = 0;
colnum = 0;
colflg = 0;
arnum = 0;
arflg = 0;
worksatitle = [];
worksain = [];
worksacon = [];
coltitle = [];
colin = [];
colcon = [];
artitle = [];
arin = [];
arcon = [];

// all environments
app.set('port', process.env.PORT || 80);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/works', routes.works);
app.get('/collections', routes.collections);
app.get('/article', routes.article);
app.get('/stickup', routes.stickup);
app.get('/en', routes.enindex);
app.get('/en/about', routes.enabout);
app.get('/en/works', routes.enworks);
app.get('/en/collections', routes.encollections);
app.get('/en/article', routes.enarticle);
app.get('/codegarage', routes.codegarage);
app.get('/codegarages', routes.codegarages);
app.get('/register', routes.register);

app.get('/article/thread', routes.thread);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});