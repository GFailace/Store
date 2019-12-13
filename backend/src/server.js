const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

const server = express();

mongoose.connect('mongodb://localhost:27017/inventario', {
    "auth": { "authSource": "admin" },
    "user": "",
    "pass": "",
    useNewUrlParser: true
})

server.use(cors())
server.use(express.json())
server.use(routes);

server.listen(4000);
