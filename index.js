const cors = require('cors');
const express = require('express');
const router = require('./routers');
const app = express();
app.use(cors());
app.use(router);
const server = http.createServer(app);
server.listen(3333);
console.log('Server running on port 3333');
