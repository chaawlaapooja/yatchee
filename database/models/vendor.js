const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const { ObjectId } = require('bson');

const vendorSchema = new mongoose.Schema({
    name : {type:String, required:true},
    phone : {type:Number, required:[true, 'Phone needs to be unique'], unique:true},
    username : {type:String, required:[true, 'Please provide your username'], unique:true},
	password : {type : String, required: true},
    profilePicture : {type:String, default:null},
    feedbacks : [{type: ObjectId, ref:'feedback'}],
    location: {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
        },
        coordinates: {
          type: [Number]
        }
    },
    locationLastUpdatedAt : {type:Date}
})

vendorSchema.pre('save', function(next){
	const user=this
  
	bcrypt.hash(user.password,10,function(error,encrypted){
		user.password=encrypted
		next()
	})
})

const vendor = mongoose.model('vendor', vendorSchema)

module.exports = vendor