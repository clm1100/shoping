var mongoose = require('mongoose')
var url = require('../config/mongodbConfig').url;
var db = mongoose.connect(url,{useMongoClient:true},function(err){
    if(!err){
        console.log("mongo ok")
    }
});
