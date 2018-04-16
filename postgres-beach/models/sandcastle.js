'use strict';
module.exports = (sequelize, DataTypes) => {
  var Sandcastle = sequelize.define('Sandcastle', {
    description: DataTypes.STRING
  }, 
  {
    tableName: 'castles', timestamps: false
  });
  Sandcastle.associate = function(models) {
    Sandcastle.belongsTo(models.Beach, {
      foreignKey: 'beach_id',
      onDelete: 'CASCADE'
    })
    Sandcastle.belongsToMany(models.Tool, {
      as: 'Tools', 
      through: 'castle_tools'
    })
  };
  return Sandcastle;
};