const User = require('../model/user.model')
const hashPassword = require('../utils/hashPassword')

exports.register = async (req, res) => {
    console.log("reee==", req.body.password)
    const hashpass = hashPassword(req.body.password, 8)
    const userObj = {
        name: req.body.name,
        email: req.body.email,
        password: hashpass,
        // img: req.files[0].file
    }
    const user = User.create(userObj)
    res.status(201).send({
        message: "User created successfully",
        status: false
    })
}