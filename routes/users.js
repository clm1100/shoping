var express = require('express');
var router = express.Router();
var loginValidata = require('../validata');
/* GET users listing. */
var controller = require('../controller/user')
router.get('/',loginValidata, controller.index);

module.exports = router;
