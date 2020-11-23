const user = require('../database/models/user')

module.exports = (req, res) => {
    const {_id, boatLength, boatBreadth, boatBrand} = req.body
    user.updateOne({_id:_id},{$set :
        {
            boatLength, boatBreadth, boatBrand
        }}, (error, result)=>{
                if(error)
                    return res.status(400).json(error)
                else{
                    return res.status(200).json('Boat info updated successfully')
                }
        }
    )
}