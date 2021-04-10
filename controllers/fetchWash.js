const { ObjectId } = require('bson')
const wash = require('../database/models/wash')

module.exports = (req, res) => {
    const {userId, vendorId, status, washTypesProvided, forWhom} = req.body
    let projection = {}
    if(forWhom==='user')
        projection={userInfo:ObjectId(userId), status}
    else if(forWhom==='vendor'){
        if(status!=='pending')
            projection={vendorInfo:ObjectId(vendorId), status, isCancelled:false}
        else
            projection={washType:{"$in":washTypesProvided}, status, isCancelled:false}
    }
    else if(forWhom==='admin'){
        projection={}
    }
    wash.find(projection, (error, result) => {
            if(error){
                return res.status(400).json(error)
            }
            return res.status(200).json(result)
    })
    .populate('userInfo')
    .populate({ 
        path: 'vendorInfo',
        populate: {
          path: 'feedbacks'
        } 
    })
    .sort({requestedAt:-1})
}