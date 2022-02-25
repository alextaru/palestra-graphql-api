const server = require('./service')

const resolvers = {
    produtos: async () => {
        return  await server.findAllProdutos();
    },
    vendedores: async () => {
        return await server.findAllVendedores();
        
    } 
}

module.exports = resolvers;