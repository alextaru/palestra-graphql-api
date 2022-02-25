'use strict';
const tableName = 'produtos';
const schema = 'venda';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable({tableName, schema}, {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      codigo_barra: {
        type: Sequelize.STRING,
        allowNull: true
      },
      codigo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      marca: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      preco_compra: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      preco_custo: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      preco_venda: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      estoque: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable({tableName, schema});
  }
};
