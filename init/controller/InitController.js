var manager = require('./InitManager.js');


exports.index = function(req, res){
	manager.on(req, res, 0);
}

exports.error = function(req, res){
	manager.on(req, res, 1);
}

