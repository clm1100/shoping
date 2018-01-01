var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');


/* GET home page. */
// var controller = require('../controller/index');

var UserDao = require('../model/userModel').Dao;
var Token = require('../token');
router.post('/', function(req,res,next){
    var username = req.body.username;
    var password = req.body.password;
    UserDao.findOne({username:username},function(err,result){
        if(!err){
            if(bcrypt.compareSync(password,result.encrypeted_passeord)){
                result.encrypeted_passeord = null;
                
                req.session.user = result;
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



router.post('/token', function(req,res,next){
    var username = req.body.username;
    var password = req.body.password;
    UserDao.findOne({username:username},function(err,result){
        if(!err){
            if(bcrypt.compareSync(password,result.encrypeted_passeord)){
                result.encrypeted_passeord=null;
                result.cart = null;
                result.order=null;
                Token.setUserToken(result,function(data){
                    res.json({
                        code:'200',
                        token:data,
                        user:result
                    })
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


router.post('/token/test',Token.Token,function(req,res){
    console.log(req.query.bbb)
    console.log(req.user)
    res.json({
        code:'200',
        data:"ok"
    })
})



module.exports = router;
