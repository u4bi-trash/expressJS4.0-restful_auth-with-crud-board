exports.on = function(req, res,fs, filePath, ejs){

	fs.readFile(filePath+'error.html', function(error, data){
		res.send(ejs.render(data.toString()));

	});
	console.log('에러 페이지를 엽니다.');
}