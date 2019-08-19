const { Schema, model } = require('mongoose')

const DevSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    system: {
        type: String,
        required: true,
    }
}, {
        timestamps: true,
    });

module.exports = model('Dev', DevSchema)