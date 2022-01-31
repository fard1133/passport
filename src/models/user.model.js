const { Sequelize, Model, DataTypes } = require('sequelize');
const { sequelize } = require('../db');


const User = sequelize.define('users', {
  first_name: {
    type: DataTypes.STRING(1000),
  },
  last_name: {
    type: DataTypes.STRING(1000)
  }, 
  email: {
    type: DataTypes.STRING(1000),
    allowNull: false,
    unique: true
  },

  password: {
    type: DataTypes.STRING(1000),
  }
});
  module.exports = sequelize.model('users', User);