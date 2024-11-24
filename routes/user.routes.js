const userController = require('../controller/user.controller')
const multer = require('multer')
const path = require('path')
const isAuth = require('../middleware/auth.middleware')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/img'))
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })
module.exports = (app) => {
    app.post('/api/user/register', upload.array('img'), userController.rgister)
    app.get('/api/user/login', userController.signin)
    app.get('/api/user/get', isAuth, userController.getUser)
    app.get('/api/user/getRating', isAuth, userController.getAvgRating)
    app.post('/fileUpload', upload.single('video'), userController.myTest)

}