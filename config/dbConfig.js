const mongoose = require('mongoose')

const dbConfig = () => {
    mongoose.connect(process.env.DB_URL).then(() => {
        console.log("DB Connected Successfully")
    }).catch((error) => {
        console.log("Error", error)
    })
}
module.exports = dbConfig