'use strict';
const Sequelize = require('sequelize');

const db = require('../_db');

module.exports = db.define('question', {
    questionText: {
        type: Sequelize.TEXT
    },
    answer: {
    	type: Sequelize.STRING
    },
    questionType: {
    	type: Sequelize.ENUM('Multiple Choice', 'True or False', 'Open Response')
    }
});