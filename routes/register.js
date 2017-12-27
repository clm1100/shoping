var express = require('express');
var router = express.Router();


var UserDao = require('../model/userModel').Dao;

router.post('/', function (req, res) {
    console.log(req.session)
    var obj = {
        username: req.body.username,
        password: req.body.password
    }
    UserDao.count({
        username: req.body.username,
    }, function (err, result) {
        if (result > 0) {
            res.json({
                code: '500',
                msg: '账户已经被注册,请换一个名称'
            })
        } else {
            UserDao.create(obj, function (err, info) {
                if (err) {
                    console.log(err);
                }
                info.encrypeted_passeord = null;;
                req.session.user = info;
                res.json(info);
            })
        }
    })
});

module.exports = router;