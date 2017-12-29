var express = require('express');
var router = express.Router();
var loginValidata = require('../validata');
/* GET users listing. */
var productDao = require('../model/productModel').Dao;
var UserDao    =require('../model/userModel').Dao;
router.post('/',function(req,res){
    var obj = {
        productname:req.body.productname,
        price:req.body.price,
        category:req.body.category,
        inventory:req.body.inventory,
    }
    productDao.create(obj,function(err,info){
        if(err){
            res.json({
                code:'500',
                msg:err
            })
        }else{
            res.json({
                code:'200',
                info:info
            })
        }
    })
});

router.post('/tocart',function(req,res){
    var productid = req.body.productid;
    var userid = req.body.userid || req.session.user._id;
    var count = req.body.count || 1;
    console.log(productid,userid,count)
    UserDao.getById(userid,function(err,result){
        if(!err){
            let arr = result.cart;
            let product = arr.filter(function(e){
                return e.productid == productid
            });
            if(product.length){
                product[0].count+= parseInt(count);
            }else{
                arr.push({
                    productid:productid,
                    count:count 
                })
            }
            result.save(function(err,info){
                if(!err){
                    res.json({
                        code:'200',
                        info:info
                    })
                }
            })
        }else{
            res.json({
                code:'404',
                msg:'报错了'
            })
        }
    })


})

router.get('/list',function(req,res){
    productDao.all(function(err,results){
        if(!err){
            res.json({
                code:'200',
                info:results
            })
        }else{
            res.json({
                code:'500',
                err:err
            })
        }
    })
})

module.exports = router;
