var express = require('express');
var router = express.Router();
var UserDao = require('../model/userModel').Dao;
var loginValidata = require('../validata');
/* GET users listing. */
var controller = require('../controller/user')
router.get('/',loginValidata, controller.index);
router.get('/cart',loginValidata,function(req,res){
	var id = req.session.user._id;
	UserDao.getById(id,function(err,result){
		if(!err){
			res.json({
				code:"200",
				info:result.cart
			})
		}else{
			res.json({
				code:'500',
				msg:'报错了',
				err:err
			})
		}
	})

})

module.exports = router;
