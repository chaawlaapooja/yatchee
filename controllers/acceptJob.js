const { ObjectID } = require('bson')
const user = require('../database/models/user')
const wash = require('../database/models/wash')
const vendor = require('../database/models/vendor')
const triggerNotification = require('./sendNotification')

module.exports = (req, res) => {
    const {_id, vendorId} = req.body
    wash.updateOne({_id:_id},{$set :
        {
            vendorInfo : ObjectID(vendorId),
            status:'active'
        }}, (error, result)=>{
                if(error)
                    return res.status(400).json(error)
                else if(result.nModified===1){
                    return res.status(200).json('Wash accepted by Vendor successfully')
                }
        }
    )
    wash.findOne({_id},(error, result) => {
        if (result) {
            let userId = result.userInfo;
            user.findOne({_id:userId}, (err,userData)=> {
                const {androidPlayerID, iosPlayerID} = userData
                const playerId = androidPlayerID? androidPlayerID: iosPlayerID
                vendor.findOne({_id:vendorId}, (e,vendorData)=> {
                    triggerNotification(`Your job was accepted by ${vendorData.firstName} ${vendorData.lastName}!`, [playerId], vendorData.profilePicture)
                })
            })
        }
    })
}