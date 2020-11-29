const mongoose = require('mongoose')

const vendorTypeSchema = new mongoose.Schema({
    name : {type:String, required:true}
})

const vendorType = mongoose.model('vendorType', vendorTypeSchema)

module.exports = vendorType