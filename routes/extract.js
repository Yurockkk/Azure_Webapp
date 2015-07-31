var express = require('express');
var router = express.Router();

var mongoose = require('mongoose'),
  task = require('../models/task.js');


router.get('/', function(req, res, next) {
	console.log("In /extract");
  	task.find({},function(err,docs){
  		res.json(docs);
  	});
});

router.get('/category/:itemCategory', function(req, res, next) {
	console.log("In /extract/category/:itemCategory= "+req.params.itemCategory);
	console.log(" "+req.params.itemCategory);
	if(req.params.itemCategory){
		task.find({itemCategory: req.params.itemCategory},function(err,docs){
  		res.json(docs);
  		});
	}

  	
});

router.get('/completed/:itemCompleted',function(req,res,next){
	console.log("In /extract/completed/:itemCompleted= "+req.params.itemCompleted);
	
	if(req.params.itemCompleted){
		task.find({itemCompleted: req.params.itemCompleted},function(err,docs){
  		res.json(docs);
  		});
  	}
})



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
