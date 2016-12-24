'use strict';
const Sequelize = require('sequelize');

const db = require('../_db');

module.exports = db.define('student', {
    password: {
        type: Sequelize.STRING
    },
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
});