const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const resolvers = require('./resolvers');
const cors = require('cors');
const http = require('http');
const expressPlayground = require('graphql-playground-middleware-express')
  .default
const app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
}));
app.get("/playground", expressPlayground({ endpoint: "/graphql" }));
app.listen(3333);
console.log('Running API server at http://localhost:3333/playground');