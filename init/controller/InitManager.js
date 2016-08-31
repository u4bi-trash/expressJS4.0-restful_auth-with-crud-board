var index = require('../model/index.js');
var error = require('../model/error.js');

var ejs = require('ejs');
var fs = require('fs');

var filePath='/home/rootcode10/workspace/webgame/init/view/';


exports.on = function(req, res, type){
	
	switch(type){
			case 0: index.on(req, res, fs, filePath, ejs); break;
			case 1: error.on(req, res, fs, filePath, ejs); break;
			default : break;		
		}
}