'use strict';
const db = require('./_db');
module.exports = db;

const User = require('./models/user');
const Student = require('./models/student');
const Test = require('./models/test');
const Classroom = require('./models/classroom');
const Question = require('./models/question');
const Answer = require('./models/answer');
const Choice = require('./models/choice');

Student.belongsTo(Classroom);
Classroom.hasMany(Student);

Classroom.belongsTo(User);
User.hasMany(Classroom);

Test.belongsTo(Classroom);
Classroom.hasMany(Test);

Question.belongsTo(Test);
Test.hasMany(Question);

Answer.belongsTo(Student);
Student.hasMany(Answer);

Answer.belongsTo(Question);
Question.hasMany(Answer);

Choice.belongsTo(Question);
Question.hasMany(Choice);