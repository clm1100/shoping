var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');


/* GET home page. */
// var controller = require('../controller/index');

var UserDao = require('../model/userModel').Dao;

router.post('/', function(req,res,next){
    var username = req.body.username;
    var password = req.body.password;
    UserDao.findOne({username:username},function(err,result){
        if(!err){
            if(bcrypt.compareSync(password,result.encrypeted_passeord)){
                res.json({
                    code:"200",
                    info:result
                })
            }else{
                res.json({
                    code:'404',
                    msg:"密码不正确",
                })
            }
        }else{
            res.json({
                code:'500',
                msg:'没有用户信息',
                err:err
            })
        }
    })
    
});


module.exports = router;
