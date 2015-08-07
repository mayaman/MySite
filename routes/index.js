var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Maya Man' });
});

router.get('/resume', function(req, res, next) {
  res.sendfile(path.resolve(__dirname + '/../views/resume.pdf'));
});

router.get('/jam', function(req, res, next) {
  res.render('jam', { title: 'Maya Man' });
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'Maya Man' });
});

module.exports = router;
