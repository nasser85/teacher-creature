'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
const db = require('../../../db');
const Student = db.model('student');

router.post('/', function(req, res, next) {
	Student.create(req.body)
		.then(function(newStudent) {
			res.send(newStudent);
		})
		.catch(next);
})

router.put('/update', function(req, res, next) {
	Student.update(req.body)
		.then(function(student) {
			res.send(student);
		})
		.catch(next);
})

router.delete('/:studentId', function(req, res, next) {
	Student.findOne({
			where: {
				id: req.params.studentId
			}
		})
		.then(function(student) {
			return student.destroy()
				.then(function (deletedStudent) {
					res.sendStatus(200);
				})
		})
		.catch(next);
})

router.use(function (req, res) {
    res.status(404).end();
});