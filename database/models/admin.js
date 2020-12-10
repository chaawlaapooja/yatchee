const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const adminSchema = new mongoose.Schema({
    email : {type:String, required:[true, 'Please provide your username'], unique:true},
	password : {type : String, required: true},
})

adminSchema.pre('save', function(next){
	const admin=this
  
	bcrypt.hash(admin.password,10,function(error,encrypted){
		admin.password=encrypted
		next()
	})
})

const admin = mongoose.model('admin', adminSchema)

module.exports = admin