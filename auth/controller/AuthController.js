var manager = require('./AuthManager.js');


exports.login = function(req, res){
	if(req.method=='GET'){
		manager.on(req, res, 0);
		
	}else if(req.method=='POST'){
		manager.on(req, res, 1);
	}
}

exports.register = function(req, res){
	if(req.method=='GET'){
		manager.on(req, res, 2);
		
	}else if(req.method=='POST'){
		manager.on(req, res, 3);
	}
}

exports.logout = function(req, res){
	manager.on(req, res, 4);
}
