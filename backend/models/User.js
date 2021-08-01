const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true,
        index:true,
        unique:true,
        sparse:true
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
    }
})

module.exports = mongoose.model('user', userSchema)