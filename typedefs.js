type produto {
    id: ID!
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
    data_nascimento: Date!,
    email: String!,
    telefone: Int!,
}

type Query {
    produtos(): [produto]!
    vendedores(): [vendedor]!
}