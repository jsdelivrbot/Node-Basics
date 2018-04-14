'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tool = sequelize.define('Tool', {
    name: DataTypes.STRING
  }, 
  {
    tableName: 'tools', timestamps: false
  });
  Tool.associate = function(models) {
    Tool.hasMany(models.Sandcastle, {
      foreignKey: 'tool_id',
      onDelete: 'CASCADE'
    })
  };
  return Tool;
};