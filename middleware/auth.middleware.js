const jwt = require('jsonwebtoken')
const isAuth = (req, res, next) => {
    if (!req.headers || !req.headers['authorization']) {
        return res.status(404).send({
            message: "Please provide token"
        })
    }
    const token = req.headers['authorization'].split(' ')[1]
    if (!token) {
        return res.status(404).send({
            message: "Invalid token"
        })
    }
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY)
    req.user = decodedToken
    next()


}
module.exports = isAuth