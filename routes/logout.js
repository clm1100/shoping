var express = require('express');
var router = express.Router();

/* GET home page. */
// var controller = require('../controller/index');



router.post('/', function(req,res){
	console.log(req.session);
	req.session.destroy(function(err){
		if(!err){
			res.json({
				code:"200",
				msg:'成功退出'
			})
		}else{
			res.json({
				code:'500',
				msg:'报错了'
			})
		}
	})
});


module.exports = router;
