// 分页数据
var apiPool = require('../apiPool');
module.exports = {
	getCount: function(sql, params, callback) {
		let condition = ''
		if (params) {
			let cLists = []
			for (var [key, value] of params) {
				const str = key + '=' + value
				cLists.push(str)
			}
			if (cLists.length > 0) {
				condition = 'where ' + cLists.join(' and ')
			}
		}
		var newSql = sql + condition
		db.query(sql, callback)
	}
}