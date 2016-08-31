var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('cookie-session');

var methodOverride = require('method-override');


var board = require('./board/controller/BoardController.js');
var auth = require('./auth/controller/AuthController.js');
var init = require('./init/controller/InitController.js');


var app = express();

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(session({
	secret:'secret key',
	key:'webgame'
}));


app.get('/board/new',board.create);
app.post('/board',board.create);

app.get('/board',board.index);
app.get('/board/:id',board.show);

app.get('/board/:id/edit',board.update);
app.put('/board/:id',board.update);

app.delete('/board/:id',board.destory);


app.get('/login',auth.login);
app.post('/login',auth.login);

app.get('/regist',auth.register);
app.post('/regist',auth.register);

app.get('/logout',auth.logout);

app.get('/',init.index);
app.all('*',init.error);


http.createServer(app).listen(8888);
console.log('서버가 열립니다. 포트 : 8888');
