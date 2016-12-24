'use strict';
const Sequelize = require('sequelize');

const db = require('../_db');

module.exports = db.define('answer', {
    answer: {
        type: Sequelize.STRING
    }
});