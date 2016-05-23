var mysql = require('mysql');
var moment = require('moment');
var $conf = require('../conf/db');
var $sql  = require('./contactSqlMapping');

var pool = mysql.createPool($conf.mysql);

var jsonWrite = function(res, ret) {
	if(typeof ret === 'undefined') {
		res.json({
			code: '1',
			msg: '操作失败'
		});
	} else {
		res.json(ret);
	}
};

module.exports = {
	add: function(req, res, next) {
		pool.getConnection(function(err, connection) {
			var param = req.query || req.params;
			param.create_time = moment().format('YYYY-MM-DD HH:mm:ss');
			connection.query($sql.insert, [param.username, param.email, param.message, param.create_time], function(err, result) {
				console.log(param)
				console.log(err)
				console.log(result)
				if(result) {
					result = {
						code: 200,
						msg: '增加成功'
					}
				}
				console.log(result);

				jsonWrite(res, result);

				connection.release();
			})
		});
	},
	queryAll: function(req, res, next) {
		pool.getConnection(function(err, connection) {
			connection.query($sql.queryAll, [], function(err, result) {

				jsonWrite(res, result);

				connection.release();
			})
		});
	}
}