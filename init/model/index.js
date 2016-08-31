exports.on = function(req, res,fs, filePath, ejs){

	var userid = req.session.userid;
	var name = req.session.name;

	fs.readFile(filePath+'index.html', function(error, data){
		console.log('[세션로그] 아이디 : %s 닉네임 : %s',userid, name);
		res.send(ejs.render(data.toString(),{userid:userid, name:name}));

	});
	console.log('메인 페이지를 엽니다.');
}