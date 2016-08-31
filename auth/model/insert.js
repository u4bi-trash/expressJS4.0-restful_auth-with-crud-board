var userid, pwd, name, gender,
	birthdate, phone, email, addr,
	rating, point, userip, regdate;
	
exports.on = function(req, res, client){

	var sql = 'insert into log (userid, pwd, name, gender, birthdate, phone, email, addr, rating , point, userip, regdate)';
	sql+='values(?,?,?,?,?,?,?,?,?,?,?,?)';
	
	console.log('d: ',sql);
	init(req);
	client.query(sql,[userid, pwd, name, gender,birthdate, phone, email, addr,
	                  rating, point ,userip, regdate],
			
		function (error, result){
			if(error){
				console.log('쿼리 문장에 오류가 있음 : ',error);
				res.redirect('/regist');
			}else{
				res.redirect('/login');
			}
		}

	);
	console.log('회원가입 정보가 업로드 되었습니다.');
	console.log('아이디 : %s 패스워드 : %s 성명 : %s 성별코드 : %s 생년월일 : %s 전화번호 : %s 이메일 : %s 주소 : %s 등급 : %s 포인트 : %s 아이피 : %s 가입일자 : %s',
	userid, pwd, name, gender, birthdate, phone, email, addr,
	rating,point,userip,regdate);
	
}

function init(req){
	userid = req.param('p_userid');
	pwd = req.param('p_pwd');
	name = req.param('p_name');
	gender = req.param('p_gender');
	birthdate= req.param('p_birthdate');
	phone = req.param('p_phone');
	email = req.param('p_email');
	addr = req.param('p_addr');

	rating=1;
	point=1;
	userip='123.123.123';
	regdate='20140617';
	
}

