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
    Sandcastle.belongsTo(models.Tool, {
      foreignKey: 'tool_id',
      onDelete: 'CASCADE'
    })
  };
  return Sandcastle;
};