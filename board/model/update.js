var id, title, content;
	
exports.on = function(req, res, client){

	init(req);
	console.log('id',id);
	console.log('title',title);
	console.log('content',content);
	
	client.query('update board set title=?, content=? where id=?',
		[title, content,id],

		function (error, result){
			if(error) return console.log('쿼리 문장에 오류가 있음.');
			res.redirect('/board/'+id);
		}
	);
	console.log('%d번 로그의 정보를 수정합니다.',id);

}

function init(req){
	id = req.param('id');
	title = req.param('b_title');
	content = req.param('b_content');
}
