var contact = {
	insert: 'insert into contact(username, email, message, create_time) values(?, ?, ?, ?)',
	update: 'update contact set username=?, email=?, message=?, create_time=? where id=?',
	delete: 'delete from contact where id=?',
	queryById: 'select * from contact where id=?',
	queryAll: 'select * from contact'
}

module.exports = contact;