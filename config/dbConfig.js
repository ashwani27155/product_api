const mongoose = require('mongoose')

const dbConnection = () => {
    try {
        mongoose.connect(process.env.DB_URL).then(() => {
            console.log("Databse is connected successfullt")
        }).catch((error) => {
            console.log(`Something went wrong while connecting to the database ${process.env.DB_URL}`)
        })
    } catch (error) {
        console.log("Error:", error)
    }
}
module.exports = dbConnection