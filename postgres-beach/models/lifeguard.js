'use strict';
module.exports = (sequelize, DataTypes) => {
  var Lifeguard = sequelize.define('Lifeguard', {
    name: DataTypes.STRING,
    rating: DataTypes.STRING
  }, 
  {
    tableName: 'lifeguards', timestamps: false
  });
  Lifeguard.associate = function(models) {
    Lifeguard.belongsTo(models.Beach, {
      foreignKey: 'beach_id',
      onDelete: 'CASCADE'
    })
  };
  return Lifeguard;
};