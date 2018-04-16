'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tool = sequelize.define('Tool', {
    name: DataTypes.STRING
  }, 
  {
    tableName: 'tools', timestamps: false
  });
  Tool.associate = function(models) {
    Tool.belongsToMany(models.Sandcastle, {
      through: 'castle_tools'
    })
  };
  return Tool;
};