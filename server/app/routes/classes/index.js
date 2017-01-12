'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
const db = require('../../../db');
const Class = db.model('classroom');

router.get('/', function(req, res, next) {
	Class.findAll({})
		.then(function(allClasses) {
			res.send(allClasses);
		})
		.catch(next);
});

router.post('/', function(req, res, next) {
	Class.create(req.body)
		.then(function(newClass) {
			res.send(newClass);
		})
		.catch(next);
})

router.get('/:id', function(req, res, next) {
	Class.findOne({
			where: {
				id: req.params.id
			}
		})
		.then(function(foundClass) {
			res.send(foundClass);
		})
		.catch(next);
});

router.use(function (req, res) {
    res.status(404).end();
});