'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');

router.use('/users', require('./users'));
router.use('/classrooms', require('./classrooms'));
router.use('/tests', require('./tests'));
router.use('/questions', require('./questions'));


router.use(function (req, res) {
    res.status(404).end();
});