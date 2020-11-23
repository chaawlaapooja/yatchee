const vendor = require('../database/models/vendor')

module.exports = (req, res) => {
    const {_id, longitude, latitude} = req.body
    vendor.updateOne({_id:_id},{$set :
        {
            "location.coordinates":[longitude,latitude],
            locationLastUpdatedAt:new Date()
        }}, (error, result)=>{
                if(error)
                    return res.status(400).json(error)
                else{
                    return res.status(200).json('Location updated successfully')
                }
        }
    )
}