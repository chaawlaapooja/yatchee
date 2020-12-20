const { ObjectId } = require('bson')
const wash = require('../database/models/wash')

module.exports = (req, res) => {
    const {_id, purpose} = req.body
    if(purpose==='refund')
        wash.updateOne({_id},{$set:{paidOn:new Date()}}, (error, result) => {
                if(error){
                    return res.status(400).json(error)
                }
                if(result.nModified>=1)
                    return res.status(200).json('success')
                else
                    return res.status(200).json('no changes done')
        })
    else if(purpose==='pay')
        wash.updateOne({_id},{$set:{isVendorPaid:true, paidOn:new Date()}}, (error, result) => {
            if(error){
                return res.status(400).json(error)
            }
            if(result.nModified>=1)
                return res.status(200).json('success')
            else
                return res.status(200).json('no changes done')
        })
}   