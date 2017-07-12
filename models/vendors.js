'use strict';
module.exports = function(sequelize, DataTypes) {
  var Vendors = sequelize.define('Vendors', {
    vendorName: DataTypes.STRING,
    vendorID: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Vendors;
};