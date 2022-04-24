'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('filmes', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },

      
      diretor: {
        type: Sequelize.STRING,
        allowNull: false
      },


      launch: {
        type: Sequelize.STRING,
        allowNull: false
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }

    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('filmes');
  }
};
