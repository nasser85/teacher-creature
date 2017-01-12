'use strict';
const Sequelize = require('sequelize');

const db = require('../_db');

module.exports = db.define('test', {
    name: {
        type: Sequelize.STRING
    },
    subject: {
        type: Sequelize.ENUM('English', 'Math', 'Science')
    },
    tags: {
        type: Sequelize.STRING
    }
});