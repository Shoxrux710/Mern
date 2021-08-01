const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true 
    },
    address: {
        type: String,
        required: true 
    },
    total:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('cart', cartSchema)