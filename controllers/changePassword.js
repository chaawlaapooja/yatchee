const bcrypt = require('bcrypt')
const user = require('../database/models/user')
const vendor = require('../database/models/vendor')

module.exports = (req, res) => {
    const { _id, oldPassword, newPassword, designation } = req.body;
    if(designation==='user')
        // user.findOneAndUpdate({_id},{$set:{password:newPassword}},(e,r)=>{
        //     console.log(e,r)
        //     return res.json('tetsing')
        // })
        user.findOne({ _id }, (error, user) => {
            if (user) {
                bcrypt.compare(oldPassword, user.password, function(err, result) {
                    console.log('comparing old password')
                    if(err)
                        return res.status(400).json('Wrong password')
                    else{
                        console.log('encrypting new password')
                        bcrypt.hash(newPassword,10,function(error,encrypted){
                            console.log(error,encrypted)
                            user.updateOne({_id},{$set:{password:encrypted}},(errorEncryption,result)=>{
                                console.log('updating new password')
                                if(errorEncryption)
                                    return res.status(400).json('some error occurred while saving your new password')
                                else
                                    return res.status(200).json(user)
                            })
                        })
                    }
                });
                // console.log(user)
                // user.updateOne({_id},{$set:{password:newPassword}}, (error,result)=>{
                //     console.log(error,result)
                //     return res.json('testng')
                // })
            } else {
                return res.status(400).json('User not found')
            }
        })
    else if(designation==='vendor')
        vendor.findOne({ _id }, (error, vendor) => {
            if (vendor) {
                bcrypt.compare(oldPassword, vendor.password, function(err, result) {
                    if(err)
                        return res.status(400).json('Wrong password')
                    else{
                        bcrypt.hash(newPassword,10,function(errorEncrypt,encrypted){
                            vendor.updateOne({_id},{$set:{password:encrypted}},(error,result)=>{
                                if(error)
                                    return res.status(400).json('some error occurred while saving your new password')
                                else
                                    return res.status(200).json('password changed successfully')
                            })
                        })
                    }
                });
            } else {
                return res.status(400).json('Vendor not found')
            }
        })
}