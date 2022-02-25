'use strict';
const tableName = 'vendedor';
const schema = 'venda';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable({tableName, schema}, {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: true
      },
      rg: {
        type: Sequelize.STRING,
        allowNull: true
      },
      data_nascimento: {
        type: Sequelize.DATE,
        allowNull: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true
      },
      telefone: {
        type: Sequelize.BIGINT,
        allowNull: true
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({tableName, schema});
  }
};
