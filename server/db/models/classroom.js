'use strict';
const Sequelize = require('sequelize');

const db = require('../_db');
const Student = require('./student');

module.exports = db.define('classroom', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
    	type: Sequelize.TEXT
    },
    grade: {
    	type: Sequelize.ENUM('Kindergarten','1st Grade', '2nd Grade', '3rd Grade', '4th Grade', '5th Grade', '6th Grade', '7th Grade', '8th Grade', '9th Grade', '10th Grade', '11th Grade', '12th Grade'),
    	allowNull: false
    },
    subject: {
    	type: Sequelize.ENUM('General Education', 'Math', 'English', 'Reading', 'Science', 'Social Studies', 'Arts', 'Elective/Other'),
    	allowNull: false
    }
}, {
    defaultScope: [Student]
});