'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn('categories', 'image',
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      ),
      queryInterface.addColumn('categories', 'is_featured',
        {
          type: Sequelize.ENUM,
          values: ["Yes", "No"],
        },
      ),
    ]);
  },

  async down (queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([
      queryInterface.removeColumn('categories', 'image'),
      queryInterface.removeColumn('categories', 'is_featured'),
    ]);
  }
};
