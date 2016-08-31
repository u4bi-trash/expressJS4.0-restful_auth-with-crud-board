
exports.on = function(req, res,client, fs,filePath,ejs){
	var page=req.param('page');
	
	client.query('select * from board',
		
		 function (error, row, fields){
			if(error) return console.log('쿼리 문장에 오류가 있음.');	
			
			fs.readFile(filePath+'list.html', 'utf8', function(error, data){
				res.send(ejs.render(data.toString(),{dataArray:row, data:page}));
				
			});
		}

	);
	console.log('모든 로그의 정보를 불러옵니다.');
}