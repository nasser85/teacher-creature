'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
const db = require('../../../db');
const User = db.model('user');

router.post('/', function(req, res, next) {
	User.create(req.body)
	.then(function(createdUser) {
		console.log('posted');
		res.send(createdUser);
	})
	.catch(next);
});

router.get('/', function(req, res, next) {
	User.findAll({})
	.then(function(allUsers) {
		res.send(allUsers);
	})
	.catch(next);
});

router.use(function (req, res) {
    res.status(404).end();
});