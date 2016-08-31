exports.on = function(req, res, client, fs, filePath, ejs){
	var id = req.param('id');
	client.query('select * from board where id =?',
		[id],

		function (error, result, fields){
			if(error) return console.log('쿼리 문장에 오류가 있음.');
			fs.readFile(filePath+'detail.html', function(error, data){
				res.send(ejs.render(data.toString(),{dataArray:result, name:req.session.name}));

			});
		}

	);
	console.log('%d번 로그의 정보를 불러옵니다.',id);	
}