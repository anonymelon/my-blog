'use strict'

var mongoose = require('mongoose');

var boot = require('../boot');

var UserSchema = new mongoose.Schema({
    name: String,
    password: String
});


UserSchema.statics = {
    getUsers: function(cb) {
        this.find({}, cb);
    },

    deleteById: function (id, cb) {
        this.delete({'_id': id}, cb);
    }
}

var UserSchema = boot.db.model('User', UserSchema);