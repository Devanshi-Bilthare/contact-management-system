const mongoose = require('mongoose')

const userModel = new mongoose.Schema({
    firstName : String,
    lastName : String,
    number : String
})

const user = mongoose.model('user',userModel)

module.exports = user