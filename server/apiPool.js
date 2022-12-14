// 使用连接池（每次连接创建一个连接池，连接完释放，提高性能）
var mysql = require('mysql');
var db = require('./db');

module.exports = function(sql, sqlParams = null) {
	return new Promise((resolve, reject) => {
		var pool = mysql.createPool(db.mysql);
		pool.getConnection(function (err, connection) {
			connection.query(sql, sqlParams, function(err, results, fields) {
				if (err) {
					reject(err);
				} else {
					resolve(results);
				}
				connection.release();
			});
		})
	})
}