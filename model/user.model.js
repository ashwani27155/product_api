const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    img: {
        type: Array
    },
    size: {
        type: Array
    },
    price: {
        type: [Number]
    },
    quantity: {
        type: Array
    },
    rating: {
        type: String
    }
}, { timestamp: true })
module.exports = mongoose.model('user', userSchema)