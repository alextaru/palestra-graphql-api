'use strict';
const tableName = 'vendedor';
const schema = 'venda';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = new Date();
    return queryInterface.bulkInsert({tableName, schema}, [{
      nome: 'teste',
      cpf: 49065029000140,
      rg: 'mg58634852',
      data_nascimento: data,
      email: 'teste@gmail.com',
      telefone: 31954782658,
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete({tableName, schema}, {}, {});
  }
};
