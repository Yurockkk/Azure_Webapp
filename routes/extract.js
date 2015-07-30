var express = require('express');
var router = express.Router();
console.log("In routes.extract");
/* GET extract page. */
router.get('/extract/:itemCategory', function(req, res, next) {
	console.log("In routes.extract: itemCategory="+req.params.itemCategory);
	task.find({
		itemCategory: req.params.itemCategory
	},function(err.docs){
		if(err){
			res.send("someting wrong");
        	console.log("find data error");
		}
		res.json(docs);
	});
  //res.render('extract', { title: 'about banana' });

});

module.exports = router;
