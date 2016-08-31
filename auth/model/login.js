exports.on = function(req, res,fs, filePath, ejs){

	fs.readFile(filePath+'login.html', function(error, data){
		res.send(ejs.render(data.toString()));

	});
	console.log('로그인 페이지를 엽니다.');
}