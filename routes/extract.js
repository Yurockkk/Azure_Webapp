var express = require('express');
var router = express.Router();

/* GET banana page. */
router.get('/banana', function(req, res, next) {
	console.log("In routes.banana");
  res.render('banana', { title: 'about banana' });
});

module.exports = router;
