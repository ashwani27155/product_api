const userController = require('../controller/user.controller')

module.exports = (app) => {
    app.post('/api/user/register', userController.register)
}