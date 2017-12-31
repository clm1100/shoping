var Redis = require('redis');
var redisClient = Redis.createClient();
var jwt = require('jwt-simple');
var User = require('../model/userModel').Dao;


function setUserToken(user, cb) {
    var token = jwt.encode(user._id, '123');
    var key = 'tokens:' + token;
    redisClient.set(key, JSON.stringify({
        id: user.id,
        at: new Date().getTime()
    }), redisClient.print);
    redisClient.expire(key, 7 * 24 * 60 * 60, redisClient.print);
    if(cb) cb(token);
}

function Token(req, res, next) {
    var accessToken = req.query.access_token;
    if (!accessToken) accessToken = req.body.access_token;
    if(!accessToken){
        res.json({
            code:"500",
            msg:'没有token'
        })
    }else{
        redisClient.get('tokens:'+accessToken,function(err,value){
           if(!err){
            var res = JSON.parse(value);
            User.getById(res.id,function(err,user){
                if(!err){
                    if(user){
                        req.user = user;
                        next()
                    }
                }else{
                    res.json({
                        code:'500',
                        msg:'报错了',
                        err:err
                    })
                }
            })
           }else{
               res.json({
                   code:'500',
                   msg:err
               })
           }
        })
    }
}

module.exports = {
    Token:Token,
    setUserToken:setUserToken
}