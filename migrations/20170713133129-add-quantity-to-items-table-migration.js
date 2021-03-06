'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('Items', {
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Items', 'quantity');
  }
};
