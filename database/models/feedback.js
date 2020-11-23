const mongoose = require('mongoose')

const feedbackSchema = new mongoose.Schema({
    userInfo : {type:mongoose.Schema.Types.ObjectId, ref:'user', required:true},
    vendorInfo : {type:mongoose.Schema.Types.ObjectId, ref:'vendor', required:true},
    washInfo : {type:mongoose.Schema.Types.ObjectId, ref:'wash', required:true},
    rating : {type:Number, required:true},
    review : {type:String},
})

const feedback = mongoose.model('feedback', feedbackSchema)

module.exports = feedback