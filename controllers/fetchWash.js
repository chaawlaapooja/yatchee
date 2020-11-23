const { ObjectId } = require('bson')
const wash = require('../database/models/wash')

module.exports = (req, res) => {
    const {userId, vendorId, status, forWhom} = req.body
    let projection = {}
    if(forWhom==='user')
        projection={userInfo:ObjectId(userId), status}
    else if(forWhom==='vendor'){
        if(vendorId)
            projection={vendorInfo:ObjectId(vendorId), status}
        else
            projection={status}
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
}