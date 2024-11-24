const User = require('../model/user.model')
const comparePassword = require('../utils/comparePassword')
const generateToken = require('../utils/generateToken')
const hashPassword = require('../utils/hashPassword')
const emailSerice = require('../service/email.service')
exports.rgister = async (req, res) => {
    try {
        const { name, email, password, size, price, quantity, rating } = req.body
        const file = req.files
        let pricrrr = []
        const img = file.map((item) => item.originalname)
        console.log("price==", price)
        if (!Array.isArray(price)) {
            pricrrr = price.split(',')
        }
        console.log("pricrrr==", pricrrr)
        let pricedata = pricrrr.map((item) => Number(item))
        if (!file) {
            res.status(404).send({ message: "Please upload file", status: false })
        }

        // user check pending
        const encryptrdPassword = hashPassword(password)
        // const img = req.file.originalname
        const userObj = {
            name: name,
            email: email,
            password: encryptrdPassword,
            img: img,
            size: size,
            price: pricedata,
            quantity: quantity,
            rating: rating
        }

        const user = await User.create(userObj)
        res.status(201).send({ message: "User Created Successfully", status: true })
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Some thing went wrong while creating user", status: false })

    }
}
exports.signin = async (req, res) => {
    try {
        console.log("req.body==", req.body)
        const { email, password } = req.body
        const user = await User.find({ email: email })    // here should be findone for check exist user 
        if (!email) {
            res.status(404).send({ message: "User in not register", status: false })
        }
        const isValidPassword = comparePassword(password, user[0].password)
        if (!isValidPassword) {
            res.status(404).send({ message: "Password in not valid", status: false })   // 404 default server status 
        }
        const token = generateToken(email, user[0]._id)
        res.status(200).send({ message: "User login successsfully", status: true, token: token })
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Something went wrnong while user login", status: false })
    }
}
exports.getUser = async (req, res) => {
    try {
        const { text } = req.body
        if (!text) {
            return res.status(404).send({ message: "Please provide the search query", status: false })
        }
        // const userData = await User.find({ name: { $regex: text, $options: 'i' } })
        const userData = await User.aggregate([
            {
                $match: { name: { $regex: text, $options: 'i' } }
            },

        ])

        res.status(200).send({ message: "User login successsfully", status: true, data: userData })
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Something went wrnong while user login", status: false })
    }
}
exports.getAvgRating = async (req, res) => {
    try {
        const { price } = req.body
        // const pricedata = price.map((item) => item)
        // console.log("pricedata==", pricedata)
        if (!price) {
            return res.status(404).send({ message: "Please provide the search query", status: false })
        }
        // const userData = await User.find({ name: { $regex: text, $options: 'i' } })
        const userData = await User.aggregate([
            {
                $match: { price: { $elemMatch: { $gte: Math.min(...price) } } }
            },

        ])
        emailSerice()
        res.status(200).send({ message: "User login successsfully", status: true, data: userData })
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Something went wrnong while user login", status: false })
    }
}

exports.deleteDuplicate = async (req, res) => {
    try {
        const { price } = req.body
        // const pricedata = price.map((item) => item)
        // console.log("pricedata==", pricedata)
        if (!price) {
            return res.status(404).send({ message: "Please provide the search query", status: false })
        }
        // const userData = await User.find({ name: { $regex: text, $options: 'i' } })
        const userData = await User.aggregate([
            {
                $match: { price: { $elemMatch: { $gte: Math.min(...price) } } }
            },

        ])
        res.status(200).send({ message: "User login successsfully", status: true, data: userData })
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Something went wrnong while user login", status: false })
    }
}