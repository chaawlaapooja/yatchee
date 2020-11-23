const mongoose = require('mongoose')

const washSchema = new mongoose.Schema({
    userInfo : {type:mongoose.Schema.Types.ObjectId, ref:'user', required:true},
    time : {type:Date, required:true},
    washType : {type:String, required:true},
    service : {type:String},
    instructions : {type:String},
    status : {type:String, default:'pending'},
    subtotal : {type:Number, required:true},
    checkupCost : {type:Number, required:true},
    vendorInfo : {type:mongoose.Schema.Types.ObjectId, ref:'vendor', default:null},
    requestedAt : {type:Number, default: new Date()}
})

const wash = mongoose.model('wash', washSchema)

module.exports = wash