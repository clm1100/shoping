var mongooseDao = require('mongoosedao');
var mongoose = require('mongoose');
var _ = require('lodash');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var ProductSchema = new Schema({
    productname: {
        type: 'string'
    },
    price: {
        type: 'number'
    },
    category:{
        type:'string'
    },
    inventory:{
        type:'number'
    }
},{versionKey:false});

var lastMod = require('./lastMod');
ProductSchema.plugin(lastMod);

var ProductModel = mongoose.model('ProductModel', ProductSchema);
var Dao = new mongooseDao(ProductModel);

module.exports = {
    Model: ProductModel,
    Dao: Dao
}