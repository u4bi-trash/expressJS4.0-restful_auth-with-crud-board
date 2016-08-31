exports.on = function(req, res, client, fs, filePath, ejs){
	var id = req.param('id');	
	client.query('select * from board where id =?',
		[id],

		function (error,result, fields){
			if(error) return console.log('쿼리 문장에 오류가 있음.');

			fs.readFile(filePath+'edit.html', function(error, data){
				res.send(ejs.render(data.toString(),{dataArray:result}));

			});			
			
		}

	);
	console.log('수정 페이지를 엽니다.');

}