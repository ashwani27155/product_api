const express = require('express')
const dbConnection = require('./config/dbConfig')
const path = require('path')
require('dotenv').config()
const app = express()
const port = process.env.PORT
app.use(express.json())
const videoPath = path.resolve('./public')
console.log(videoPath, "lllll")
app.use(express.static(videoPath))

dbConnection()
require('./routes/user.routes')(app)


app.listen(port, () => {
    console.log(`Server is running on port${port}`)
})