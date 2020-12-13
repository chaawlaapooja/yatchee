const bcrypt = require('bcrypt')
const user = require('../database/models/user')
const vendor = require('../database/models/vendor')
const admin = require('../database/models/admin');

module.exports = (req, res) => {
    const { phone, email, newPassword, designation } = req.body;
    if(designation==='user'){
        user.findOne({ phone }, (error, userFound) => {
            if (userFound) {
                bcrypt.hash(newPassword,10,function(errorHash,encrypted){
                    if(errorHash)
                        return res.status(400).json('error in hashing new password')
                    user.updateOne({phone},{$set:{password:encrypted}},(errorEncryption,success)=>{
                        if(errorEncryption)
                            return res.status(400).json('some error occurred while saving your new password')
                        else {
                            if(success.nModified===1)
                                return res.status(200).json('password updated successfully')
                            else    
                                return res.status(200).json('no changes done')
                        }
                    })
                })
            }
            else {
                return res.status(400).json('User not found')
            }
        })
    }
    else if(designation==='vendor'){
        vendor.findOne({ phone }, (error, userFound) => {
            if (userFound) {
                bcrypt.hash(newPassword,10,function(errorHash,encrypted){
                    if(errorHash)
                        return res.status(400).json('error in hashing new password')
                    user.updateOne({phone},{$set:{password:encrypted}},(errorEncryption,success)=>{
                        if(errorEncryption)
                            return res.status(400).json('some error occurred while saving your new password')
                        else {
                            if(success.nModified===1)
                                return res.status(200).json('password updated successfully')
                            else    
                                return res.status(200).json('no changes done')
                        }
                    })
                })
            }
            else {
                return res.status(400).json('User not found')
            }
        })
    }
    else if(designation==='admin'){
        admin.findOne({ email }, (error, adminFound) => {
            if (adminFound) {
                bcrypt.hash(newPassword,10,function(errorHash,encrypted){
                    if(errorHash)
                        return res.status(400).json('error in hashing new password')
                    admin.updateOne({email},{$set:{password:encrypted}},(errorEncryption,success)=>{
                        if(errorEncryption)
                            return res.status(400).json('some error occurred while saving your new password')
                        else {
                            if(success.nModified===1)
                                return res.status(200).json('password updated successfully')
                            else    
                                return res.status(200).json('no changes done')
                        }
                    })
                })
            }
            else {
                return res.status(400).json('Admin not found')
            }
        })
    }   
}