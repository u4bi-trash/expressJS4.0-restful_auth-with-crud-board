exports.on = function(req, res,fs, filePath, ejs){

	fs.readFile(filePath+'regist.html', function(error, data){
		res.send(ejs.render(data.toString()));

	});
	console.log('회원가입 페이지를 엽니다.');
}