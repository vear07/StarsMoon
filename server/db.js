// 数据库连接配置
module.exports = {
	mysql: {
		host: 'localhost',
		user: 'root',
		password: '123456',
		database: 'starsmoon',
		port: '3306',
		multipleStatements: true // 允许node.js执行多条sql语句
	}
}