'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    firstname: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    lastname: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false, tableName: "users"
  });

  User.associate = function(models) {
    // associations can be defined here
  };

  // instance method for interacting w/ individual entries
  User.prototype.getFullName = function () {
    return `${this.firstname} ${this.lastname}`
  }
  return User;
};