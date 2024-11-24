const express = require('express')
const dbConnection = require('./config/dbConfig')
require('dotenv').config()
const app = express()
const port = process.env.PORT
app.use(express.json())

dbConnection()
require('./routes/user.routes')(app)


app.listen(port, () => {
    console.log(`Server is running on port${port}`)
})