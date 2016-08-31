var selectAll = require('../model/selectAll.js');
var select = require('../model/select.js');
var write = require('../model/write.js');
var insert = require('../model/insert.js');
var edit = require('../model/edit.js');
var update = require('../model/update.js');
var destory = require('../model/destory.js');

var ejs = require('ejs');
var fs = require('fs');
var mysql = require('mysql');

var client = mysql.createConnection({
	user: 'root',
	password: '',
	database: 'webgame'

});

var filePath='/home/rootcode10/workspace/webgame/board/view/';


exports.on = function(req, res, type){
	console.log('type',type);
	if(typeof req.session.userid =="undefined")return res.redirect('/login');
		
	switch(type){
		case 0: selectAll.on(req, res, client, fs, filePath, ejs); break;
		case 1: select.on(req, res, client, fs, filePath, ejs); break;
		case 2: write.on(req, res, fs ,filePath,ejs); break;
		case 3: insert.on(req, res, client); break;
		case 4: edit.on(req, res, client, fs ,filePath, ejs); break;
		case 5: update.on(req, res, client); break;
		case 6: destory.on(req, res, client); break;
		default : break;		
	}
}
