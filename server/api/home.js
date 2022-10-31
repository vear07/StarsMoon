// 
var apiPool = require('../apiPool');
const express = require('express');
const router = express.Router();

router.get('/GetHotRecruit', function(req, res, next) {
	var sql = 'select * from recruit order by rand() limit 6';
	apiPool(sql).then((data) => {
		res.send(data);
	}).catch((err) => {
		res.send(err);
	})
})

module.exports = router