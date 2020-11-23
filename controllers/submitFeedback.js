const { ObjectID } = require('bson')
const feedback = require('../database/models/feedback')
const vendor = require('../database/models/vendor')

module.exports = (req, res) => {
    const {washId, vendorId, userId, rating, review} = req.body
    feedback.create({
        washInfo:ObjectID(washId),
        userInfo:ObjectID(userId),
        vendorInfo:ObjectID(vendorId),
        rating,
        review
    }, (error, result)=>{
                if(error)
                    return res.status(400).json(error)
                else{
                    vendor.updateOne({_id:vendorId},{$push:{
                        feedbacks:result._id
                    }},(err,res)=>{
                        if(err)
                            return res.status(400).json('error occorred while saving feedback for vendor')
                        else
                            return res.status(200).json('Feedback submited successfully')
                    })
                    
                }
        }
    )
}