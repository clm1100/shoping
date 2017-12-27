var express = require('express');
var router = express.Router();

/* GET home page. */
var controller = require('../controller/index');



router.get('/', controller.index);


module.exports = router;
