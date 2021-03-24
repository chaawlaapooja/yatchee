const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name : {type:String, required:true},
    phone : {type:Number, required:[true, 'Phone needs to be unique'], unique:true},
    username : {type:String, required:[true, 'Please provide your username'], unique:true},
	password : {type : String, required: true},
	boatLength : {type:Number, default:null},
	boatBreadth : {type:Number, default:null},
	boatBrand : {type:String, default:null},
	androidPlayerID: {type:String, default:null,unique:true},
	iosPlayerID: {type:String, default:null,unique:true},
})

userSchema.pre('save', function(next){
	const user=this
  
	bcrypt.hash(user.password,10,function(error,encrypted){
		user.password=encrypted
		next()
	})
})
// userSchema.post('save', function(error, doc, next) {
//     if (error.name === 'MongoError' && error.code === 11000) {
//       next(new Error('phone/username must be unique'));
//     } else {
//       next(error);
//     }
// });
const user = mongoose.model('user', userSchema)

module.exports = user