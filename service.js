const vendedorModel = require('./models/vendedor');
const produtoModel = require('./models/produtos');

const service = {
    findAllProdutos: async () => {
        return await produtoModel.findAll();
    },
    findAllVendedores: async () => {
         return await vendedorModel.findAll();
    }
}

module.exports = service;