const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

const server = express();

mongoose.connect('mongodb://180.135.135.124:27017/inventario', {
    "auth": { "authSource": "admin" },
    "user": "gc13042",
    "pass": "FailaceRS92",
    useNewUrlParser: true
})

server.use(cors())
server.use(express.json())
server.use(routes);

server.listen(4000);