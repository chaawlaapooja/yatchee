const wash = require('../database/models/wash')
const user = require('../database/models/user')
const triggerNotification = require('./sendNotification')

module.exports = (req, res) => {
    const {_id, operation, messageFromVendor} = req.body
    if(operation==='undo')
        wash.updateOne({_id:_id},{$set : {status:'pending', vendorInfo:null, messageFromVendor}}, (error, result)=>{
            if(error)
                return res.status(400).json(error)
            else if(result.nModified===1){
                return res.status(200).json('Wash status updated successfully')
            }
        })
    else if(operation==='completed'){
        wash.updateOne({_id:_id},{$set : {status:'completed', messageFromVendor}}, (error, result)=>{
                    if(error)
                        return res.status(400).json(error)
                    else if(result.nModified===1){
                        return res.status(200).json('Wash status updated successfully')
                    }
        })
        wash.findOne({_id},(error, result) => {
            if (result) {
                let userId = result.userInfo;
                const vendorInfo = result.vendorInfo;
                user.findOne({_id:userId},(err,userData)=> {
                    const {androidPlayerID, iosPlayerID} = userData
                    const playerId = androidPlayerID? androidPlayerID: iosPlayerID
                    triggerNotification('Your job was completed!', [playerId], {big_picture : vendorInfo.profilePicture},  {ios_attachments: {imageUrl:vendorInfo.profilePicture}})
                })
            }
        })
    }
}