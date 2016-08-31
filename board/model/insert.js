var name, title, content, hit, comment, type;
	

exports.on = function(req, res, client){
	
	init(req);
	console.log('name', name);
	console.log('title', title);
	console.log('content', content);
	console.log('hit', hit);
	console.log('comment', comment);
	console.log('type', type);
	
	
	client.query('insert into board (name, title, content, hit, comment, created, type) values(?,?,?,?,?,now(),?)',
		[name, title, content, hit, comment, type],

		function (error, result){
			if(error) return console.log('쿼리 문장에 오류가 있음.');
			res.redirect('/board/'+result.insertId);
		}

	);
	console.log('글을 업로드합니다.');

}

function init(req){
	name = req.session.name;
	title = req.param('b_title');
	content = req.param('b_content');

	hit = 0;
	comment = 0;
	type = 0;
}

