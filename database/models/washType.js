const mongoose = require('mongoose')

const washTypeSchema = new mongoose.Schema({
    name : {type:String, required:true},
    pricePerFeet: {type:Number, required:true}
})

const washType = mongoose.model('washType', washTypeSchema)

module.exports = washType