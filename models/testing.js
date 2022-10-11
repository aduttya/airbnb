const mongoose = require('mongooose')

let test = new mongoose.Schema({
    name : {
        type : String,
    },
    password : {
        type : String
    }
})

module.exports = mongoose.models.Test || mongoose.model('Test',test)