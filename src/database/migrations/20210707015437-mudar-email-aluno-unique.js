module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('students',
      'email',
      {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      });
  },

  down: async () => {},
};
