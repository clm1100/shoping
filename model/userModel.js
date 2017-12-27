var mongooseDao = require('mongoosedao');
var mongoose = require('mongoose');
var _ = require('lodash');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var UserSchema = new Schema({
    username: {
        type: 'string'
    },
    password: {
        type: 'string'
    },
    encrypeted_passeord: {
        type: 'string'
    },
    monney: {
        type: 'number'
    },
    order: [{
        type: ObjectId
    }],
    cart: [{
        productid: {
            type: ObjectId
        },
        count: {
            type: 'number'
        }
    }]
}, {
    versionKey: false
});

var lastMod = require('./lastMod');
UserSchema.plugin(lastMod);

UserSchema.pre('save', function (next) {
    if (!_.isEmpty(this.password)) {
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(this.password, salt);
        console.log(hash);
        this.encrypeted_passeord = hash;
        console.log(this);
        this.password = undefined;
        next()
    } else next();
});

var UserModel = mongoose.model('UserModel', UserSchema);
var Dao = new mongooseDao(UserModel);

module.exports = {
    Model: UserModel,
    Dao: Dao
}