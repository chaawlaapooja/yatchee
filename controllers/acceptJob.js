const { ObjectID } = require('bson')
const wash = require('../database/models/wash')

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
}