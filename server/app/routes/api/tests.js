'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');

router.use(function (req, res) {
    res.status(404).end();
});