const express = require('express');
const cors = require('cors');
const router = require('./routers');
const app = express();
app.use(cors());
app.use(router);
const server = http.createServer(app);
server.listen(3333);
console.log('Running a GraphQL API server at http://localhost:3333/playground');