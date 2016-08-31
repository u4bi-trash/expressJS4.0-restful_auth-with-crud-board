var manager = require('./BoardManager.js');

exports.index = function(req, res){
	manager.on(req, res, 0);
}
exports.show = function(req, res){
	manager.on(req, res, 1);
}

exports.create = function(req, res){
	if(req.method=='GET'){
		manager.on(req, res, 2);
		
	}else if(req.method=='POST'){
		manager.on(req, res, 3);
	}
}

exports.update = function(req, res){
	if(req.method=='GET'){
		manager.on(req, res, 4);
		
	}else if(req.method=='PUT'){
		manager.on(req, res, 5);
	}
}

exports.destory = function(req, res){
	manager.on(req, res, 6);
}
