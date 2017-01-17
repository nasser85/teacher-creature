'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
const db = require('../../../db');
const Class = db.model('classroom');
const Student = db.model('student');

router.get('/', function(req, res, next) {
	Class.findAll({})
		.then(function(allClasses) {
			res.send(allClasses);
		})
		.catch(next);
});

router.post('/', function(req, res, next) {
	Class.create(req.body, {
		defaultScope: [Student]
	})
		.then(function(newClass) {
			res.send(newClass);
		})
		.catch(next);
})

router.post('/all', function(req, res, next) {
	Class.findAll({
		where: {
			userId: req.body.id
		},
		include: [Student]
		
	})
	.then(function(userClasses) {
		res.send(userClasses)
	})
	.catch(next)
})

router.post('/view', function(req, res, next) {
	Class.findOne({
			where: {
				id: req.body.id,
				userId: req.body.userId
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