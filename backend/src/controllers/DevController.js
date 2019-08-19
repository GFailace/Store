const axios = require('axios')

const Dev = require('../models/Dev')

module.exports = {

    async index(req, res) {

        const items = await Dev.find();

        return res.json({ items })
    },


    async store(req, res) {

        const { name, system } = req.body

        const dev = await Dev.create({
            name,
            system
        })

        return res.json(dev)
    },

    async delete(req, res) {

        const id = req.params.id

        const del = await Dev.findByIdAndDelete(id)

        return res.json(del)
    }/* ,
    async search(req, res) {
        const id = req.params.id

        const items = await Dev.findById(id);

        return res.json({ items })
    }, */
}