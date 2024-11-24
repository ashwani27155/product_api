const jwt = require('jsonwebtoken')

const generateToken = ({ email, userID }) => {
    return jwt.sign({ email, userID }, process.env.SECRET_KEY, { expiresIn: "365" })
}

module.exports = generateToken