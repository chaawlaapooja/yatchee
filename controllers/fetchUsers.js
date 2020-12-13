const user = require('../database/models/user')
const vendor = require('../database/models/vendor')
const admin = require('../database/models/admin');

module.exports = (req, res) => {
    const {requestedUser} = req.params
    if(requestedUser==='user'){
        user.find({}, (error, result) => {
            if(error){
                return res.status(400).json(error)
            }
            return res.status(200).json(result)
        })
    } else if(requestedUser==='vendor'){
        vendor.find({}, (error, result) => {
            if(error){
                return res.status(400).json(error)
            }
            return res.status(200).json(result)
        })
    } else if(requestedUser==='admin'){
        admin.find({}, (error, result) => {
            if(error){
                return res.status(400).json(error)
            }
            return res.status(200).json(result)
        })
    }
}