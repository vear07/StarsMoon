// 连接数据库请求数据
var apiPool = require('../apiPool');
const express = require('express');
const router = express.Router();

const findUserByMobile = (mobile) => {
	const sql = 'select * from user where mobile=' + mobile;
	return apiPool(sql)
}

const addUser = (userName, password, mobile) => {
	const sql = 'insert into user(userName,password,mobile,type,isAdmin) values(?,?,?,?,?)';
	const sqlParams = [userName, password, mobile, 0, 0]
	return apiPool(sql, sqlParams)
}

router.post('/signUp', async function(req, res, next) {
	console.log(req, 'post的req')
	const { userName, password, mobile } = req.body
	const haveUser = await findUserByMobile(mobile)
	console.log(haveUser, '是否有用户')
	if (!(haveUser && haveUser.length > 0)) {
		const addNewUser = await addUser(userName, password, mobile)
		if (addNewUser) {
			const newUser = await findUserByMobile(mobile)
			console.log(newUser, '新用户')
			res.send({
				status: 1,
				msg: '注册成功',
				userInfo: {
					userId: newUser[0].userId,
					userName: newUser[0].userName
				}
			})
		} else {
			res.send({
				status: -1,
				msg: '注册失败'
			})
		}
	} else {
		res.send({
			status: 0,
			msg: '手机号重复'
		})
	}
})

module.exports = router