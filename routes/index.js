var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout/base', { title: 'Express' });
});

router.get('/blankpage', function(req, res, next) {
  res.render('blankpage', { title: 'Express' });
});



module.exports = router;
