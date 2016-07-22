var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'B2W - Twitter Timeline Viewer' });
});

module.exports = router;
