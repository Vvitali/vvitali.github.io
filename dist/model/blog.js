'use strict';

var Sequelize = require('sequelize');
var config = {};
var sequelize = new Sequelize('vvBlog', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: false
});

var post = sequelize.define('user', {
  username: Sequelize.STRING,
  title: Sequelize.STRING,
  body: Sequelize.STRING,
  tags: Sequelize.STRING,
  birthday: Sequelize.DATE
});

sequelize.sync().then(function () {
  return User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  });
}).then(function (jane) {
  console.log(jane.toJSON());
});