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
    isFemale: {
    	type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    race: {
        type: Sequelize.ENUM('Black or African American', 'American Indian or Alaskan Native', 'Asian', 'Hispanic or Latino', 'White', 'Two or More Races', 'Other')
    }
});