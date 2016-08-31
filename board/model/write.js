exports.on = function(req, res,fs, filePath, ejs){

	fs.readFile(filePath+'write.html', function(error, data){
		res.send(ejs.render(data.toString()));

	});
	console.log('작성 페이지를 엽니다.');
}