// 连接数据库请求数据
var apiPool = require('../apiPool');
const express = require('express');
const router = express.Router();

router.get('/GetHotRecruit', function(req, res, next) {
	var sql = 'select * from user';
	apiPool(sql).then((data) => {
		res.send(data);
	}).catch((err) => {
		res.send(err);
	})
})

module.exports = router