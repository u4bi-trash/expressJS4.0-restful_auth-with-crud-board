exports.on = function(req, res){
	//req.session.destory();
	req.session = null;
	
	res.redirect('/');
	console.log('로그아웃을 합니다.');
}