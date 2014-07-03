var express = require('express');
var router = express.Router();
var indexController = require('../controllers/index');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: indexController });
});

module.exports = router;
