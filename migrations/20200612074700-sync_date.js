module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'sync_date', Sequelize.DATE);
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('users', 'sync_date');
  }
};
