'use strict'

var mongoose = require('mongoose');

var settings = require('./settings');

module.exports = {
    db: mongoose.connect(settings.mongodb.host, settings.mongodb.database)
}