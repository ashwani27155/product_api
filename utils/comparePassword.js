const bcrypt = require('bcrypt')

const comparePassword = (password, userPassword) => {
    console.log(password, userPassword)
    return bcrypt.compareSync(password, userPassword)
}
module.exports = comparePassword