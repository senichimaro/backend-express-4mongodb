const mongoose = require('mongoose')

const UserModel = mongoose.Schema({
    username: {type: String},
    password: {type: String},
    email: {type: String},
    question: [String],
    access: [String]
})
module.exports = mongoose.model('UserModel', UserModel)