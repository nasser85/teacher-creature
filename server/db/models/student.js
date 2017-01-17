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
    },
    picture: {
    	type: Sequelize.ENUM('boy.png', 'girl.png'),
    	defaultValue: 'boy.png'
    }
});