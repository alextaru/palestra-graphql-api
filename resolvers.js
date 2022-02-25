const service = require('./service');

module.exports = {
    Query:{
        produtos: () => service.findAllProdutos(),
        vendedores: () => service.findAllVendedores()
    }
}