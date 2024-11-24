const express = require('express')
const dbConfig = require('./config/dbConfig')
require('dotenv').config()
const app = express()
app.use(express.json())
dbConfig()

require('./routes/user.routes')(app)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port 8081`)
})