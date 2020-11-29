const bcrypt = require('bcrypt')
const user = require('../database/models/user')
const vendor = require('../database/models/vendor')

module.exports = (req, res) => {
    const { _id, oldPassword, newPassword, designation } = req.body;
    if(designation==='user'){
        user.findOne({ _id }, (error, userFound) => {
            if (userFound) {
                bcrypt.compare(oldPassword, userFound.password, function(err, result) {
                    if(!result)
                        return res.status(400).json('Wrong password')
                    else{
                        bcrypt.hash(newPassword,10,function(errorHash,encrypted){
                            if(errorHash)
                                return res.status(400).json('error in hashing new password');
                            user.updateOne({_id},{$set:{password:encrypted}},(errorEncryption,success)=>{
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
                });
            } else {
                return res.status(400).json('User not found')
            }
        })
    }
    else if(designation==='vendor'){
        vendor.findOne({ _id }, (error, user) => {
            if (user) {
                bcrypt.compare(oldPassword, user.password, function(err, result) {
                    if(!result)
                        return res.status(400).json('Wrong password')
                    else{
                        bcrypt.hash(newPassword,10,function(errorHash,encrypted){
                            if(errorHash)
                                return res.status(400).json('error in hashing new password')
                            user.updateOne({_id},{$set:{password:encrypted}},(errorEncryption,success)=>{
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
                });
            } else {
                return res.status(400).json('User not found')
            }
        })
    }
        
}