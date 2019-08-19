const express = require('express')

const routes = express.Router();

const DevController = require('./controllers/DevController')

routes.get('/', (req, res) => {
    return res.json({ message: `Olá ${req.query.name}` });
})

routes.get('/api/item', DevController.index)
routes.post('/api/item', DevController.store)
routes.delete('/api/item/:id', DevController.delete)



module.exports = routes