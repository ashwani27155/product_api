const bcrypt = require('bcrypt')

const comparePassword = ({ password, userPassword }) => {
    return bcrypt.compareSync(password, userPassword)
}
module.exports = comparePassword