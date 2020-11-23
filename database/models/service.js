const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
    name : {type:String, required:true},
    price: {type:Number, default:null}
})

const service = mongoose.model('service', serviceSchema)

module.exports = service