const mongoose = require('mongoose')

const washSchema = new mongoose.Schema({
    userInfo : {type:mongoose.Schema.Types.ObjectId, ref:'user', required:true},
    time : {type:Date, required:true},
    washType : {type:String, required:true},
    jobID : {type:String, default:'JOB0'+Math.random().toString().slice(-7)},
    service : {type:String},
    instructions : {type:String},
    status : {type:String, default:'pending'},
    subtotal : {type:Number, required:true},
    checkupCost : {type:Number, required:true},
    vendorInfo : {type:mongoose.Schema.Types.ObjectId, ref:'vendor', default:null},
    messageFromVendor:{type:String, default:null},
    requestedAt : {type:Number, default: new Date()},
    transactionID : {type:String, required:true},
    location: {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          required:true
        },
        coordinates: {
          type: [Number],
          required:true
        }
    },
    isCancelled : {type:Boolean, default:false},
    isVendorPaid : {type:Boolean, default:false},
    paidOn : {type:Date, default:null}
})

const wash = mongoose.model('wash', washSchema)

module.exports = wash