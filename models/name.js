'use strict';
module.exports = (sequelize, DataTypes) => {
  const names = sequelize.define('names', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  names.associate = function(models) {
    // associations can be defined here
  };
  return names;
};