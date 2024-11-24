const bcrypt = require('bcrypt')

const hashPassword = (password) => {
    console.log("password==kk", password)
    return bcrypt.hashSync(password, 8)
}

module.exports = hashPassword