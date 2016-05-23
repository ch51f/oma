var express = require('express');
var router = express.Router();
var contactDao = require('../dao/contactDao.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('page/index', { title: 'OhMyApps' });
});

router.get('/addContact', function(req, res, next) {
	contactDao.add(req, res, next);
});

router.get('/query', function(req, res, next) {
	contactDao.queryAll(req, res, next);
});

module.exports = router;
