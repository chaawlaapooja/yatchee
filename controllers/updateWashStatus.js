const wash = require('../database/models/wash')

module.exports = (req, res) => {
    const {_id, operation, messageFromVendor} = req.body
    let updatedValue;
    if(operation==='undo')
        updatedValue = {
            status: 'pending',
            vendorInfo:null
        }
    else if(operation==='completed')
        updatedValue = {
            status: 'completed'
        }
    wash.updateOne({_id:_id},{$set : {updatedValue, messageFromVendor}}, (error, result)=>{
                if(error)
                    return res.status(400).json(error)
                else if(result.nModified===1){
                    return res.status(200).json('Wash status updated successfully')
                }
            }
    )
}