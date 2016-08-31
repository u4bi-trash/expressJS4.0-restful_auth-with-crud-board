var login = require('../model/login.js');
var connect = require('../model/connect.js');
var regist = require('../model/regist.js');
var insert = require('../model/insert.js');
var logout = require('../model/logout.js');

var ejs = require('ejs');
var fs = require('fs');
var mysql = require('mysql');

/* 데이터베이스 연동*/
var client = mysql.createConnection({
	user: 'root',
	password: '',
	database: 'webgame'
});

var filePath='/home/rootcode10/workspace/webgame/auth/view/';


exports.on = function(req, res, type){
	
	switch(type){
		case 0: login.on(req, res, fs, filePath, ejs); break;
		case 1: connect.on(req, res, client); break;
		case 2: regist.on(req, res, fs, filePath, ejs); break;
		case 3: insert.on(req, res, client); break;
		case 4: logout.on(req, res); break;
		default : break;		
	}
}