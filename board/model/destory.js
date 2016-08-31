exports.on = function(req, res, client){
	var id = req.param('id');
	
	client.query('delete from board where id=?',
		[id],

		function (error, row, fields){
			if(error) return console.log('쿼리 문장에 오류가 있음.');
			res.redirect('/board');
		}

	);
	console.log('%d번 로그의 정보를 삭제합니다.',id);
}