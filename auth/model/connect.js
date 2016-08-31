var userid, pwd;

exports.on = function(req, res, client){

	var sql = 'select count(*) tick, name from log where userid=? and pwd=?';
	
	init(req);
	
	client.query(sql,[userid,pwd],
			
		function (error, result){
			if(error) return console.log('쿼리 문장에 오류가 있음.');
			console.log('반환: ',result[0].tick);
			console.log('반환: ',result[0].name);
			
			if(result[0].tick == 1){
				req.session.userid = userid;
				req.session.name = result[0].name;
					
				res.redirect('/');
				console.log('%s님이 로그인을 성공했습니다.',userid);
				console.log('[세션로그] 아이디 : %s 닉네임 : %s',req.session.userid, req.session.name);

			}else{	
				console.log('%s님이 로그인에 실패하였습니다.',userid);
				res.send('<script>alert("아이디나 비밀번호를 확인해주세요."); history.back(); </script>');
		//		res.redirect('/login');
			}
		}

	);
	console.log('아이디 : %s | 비번 : %s 로그인을 시도합니다.',userid, pwd);
	
}

function init(req){
	userid = req.param('p_userid');
	pwd = req.param('p_pwd');
}