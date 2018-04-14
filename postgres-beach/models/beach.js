'use strict';
module.exports = (sequelize, DataTypes) => {
  var Beach = sequelize.define('Beach', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    sand_rating: DataTypes.INTEGER
  }, 
  {
    tableName: 'beaches', timestamps: false
  });
  Beach.associate = function(models) {
    // define associations
    Beach.hasMany(models.Lifeguard, {
      //same foreign key must be specified when defining association on the lifeguard model.
      foreignKey: 'beach_id' 
    })
  };
  return Beach;
};