const { ObjectId } = require('bson')
const wash = require('../database/models/wash')

module.exports = (req, res) => {
    const {_id} = req.body
    wash.updateOne({_id},{$set:{isCancelled:true}}, (error, result) => {
            if(error){
                return res.status(400).json(error)
            }
            if(result.nModified>=1)
                return res.status(200).json('wash cancelled successfully')
            else
                return res.status(200).json('no changes done')
    })
}