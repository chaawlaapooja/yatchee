const vendor = require('../database/models/vendor')

module.exports = (req, res) => {
    const {_id, profilePicture, photoProof, insuranceProof} = req.body
    vendor.updateOne({_id:_id},{$set :
        {
            profilePicture, photoProof, insuranceProof
        }}, (error, result)=>{
                if(error)
                    return res.status(400).json(error)
                else if(result.nModified===1){
                    return res.status(200).json('Vendor verified successfully')
                }
        }
    )
}