const jwt = require('jsonwebtoken')
const secret_key = process.env.SECRET_KEY
const generateToken = (email, userId) => {
    return jwt.sign({ email: email, userId: userId }, secret_key, { expiresIn: "365d" })
}
module.exports = generateToken