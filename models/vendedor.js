const { connection } = require('../connection');
const { Model, DataTypes } = require("sequelize");

class Vendedor extends Model { }

Vendedor.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    rg: DataTypes.STRING,
    data_nascimento: DataTypes.DATE,
    email: DataTypes.STRING,
    telefone: DataTypes.BIGINT,
},
{
  sequelize: connection,
  tableName: 'vendedor',
  schema: 'venda'
});

module.exports = Vendedor;
