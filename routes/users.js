'user strict'

var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();

require('../models/user');
var User = mongoose.model('User');

/* GET users listing. */
router.get('/', function(req, res) {
    User.getUsers(function(err, users) {
        res.render('users/index', {
            'users': users
        });
    })
});

router.get('/register', function(req, res) {
    res.render('users/form');
});

router.post('/', function(req, res) {
    new User(req.body).save();
    res.send(200);
});

router.get('/delete/:id', function(req, res) {
    User.deleteById(req.params.id, function(err, ret) {
        res.send(200);
        res.redirect('users/index', User.getUsers(function(err, users) {
            return users
        }))
    });
});


module.exports = router;