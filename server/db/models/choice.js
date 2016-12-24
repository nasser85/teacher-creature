'use strict';
const Sequelize = require('sequelize');

const db = require('../_db');

module.exports = db.define('choice', {
    label: {
        type: Sequelize.STRING
    },
    answerChoice: {
    	type: Sequelize.STRING
    }
});