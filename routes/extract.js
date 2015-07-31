var express = require('express');
var router = express.Router();

var mongoose = require('mongoose'),
  task = require('../models/task.js');


router.get('/extract', function(req, res, next) {
	console.log("In routes.extract");
  	task.find({},function(err,docs){
  		res.json(docs);
  	});
});
/*
router.get('/extract/:itemCategory', function(req, res, next) {
	console.log("In /extract/:itemCategory"+req.params.itemCategory);
	if(req.params.itemCategory){
		task.find({itemCategory: req.params.itemCategory},function(err,docs){
  		res.json(docs);
  		});
	}
  	
});
*/
router.route('/extract/:itemCategory')
		.get(function(req.res){
			if(req.params.itemCategory){
				task.find({itemCategory: req.params.itemCategory},function(err,docs){
					res.json(docs);
				});

			}
		});

/*
var mongoose = require('mongoose'),
  task = require('../models/task.js');

console.log("In routes.extract");
// GET extract page. 
router.get('/extract',function(req,res){
	console.log("In routes.extract");
	res.send('請輸入想搜尋類別');
})
router.get('/extract/:itemCategory', function(req, res) {
	console.log("In routes.extract: itemCategory="+ req.params.itemCategory);
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

*/


module.exports = router;
