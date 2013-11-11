var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

worksanum = 0;
worksatitle = [];
worksain = [];
codegins = '';
randid = '';
cgsflg = 0;
hash = "";
codegout = '';

// all environments
app.set('port', process.env.PORT || 1337);
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
app.get('/en', routes.enindex);
app.get('/en/about', routes.enabout);
app.get('/en/works', routes.enworks);
app.get('/en/collections', routes.encollections);
app.get('/en/article', routes.enarticle);
app.get('/codegarage', routes.codegarage);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});