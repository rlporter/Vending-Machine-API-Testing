'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.renameColumn('Items', 'priceInCents', 'cost');
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.renameColumn('Items', 'cost', 'priceInCents');
  }
};
