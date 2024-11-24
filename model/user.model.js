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
    }
}, { timeStamps: true })

module.exports = mongoose.model('user', userSchema)