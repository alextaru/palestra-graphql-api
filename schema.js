const { buildSchema } = require("graphql");

const schema = buildSchema(/* GraphQL */ `
    type Query {
        produtos: [produto]!
        vendedores: [vendedor]!
    }

    type produto {
        id: ID!,
        codigo_barra: String!,
        codigo: String!,
        nome: String!,
        marca: String!,
        preco_compra: Float!,
        preco_custo: Float!,
        preco_venda: Float!,
        estoque: Int!,
    }

    type vendedor {
        id: ID!
        nome: String!,
        cpf: String!,
        rg: String!,
        data_nascimento: String!,
        email: String!,
        telefone: Int!,
    }
`);

module.exports = schema;