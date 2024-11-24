const bcrypt = require('bcrypt')
const salt = 8
const hashPassword = (password) => {
    return bcrypt.hashSync(password, salt)
}
module.exports = hashPassword