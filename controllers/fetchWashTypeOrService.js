const washType = require('../database/models/washType')
const service = require('../database/models/service')
const vendorType = require('../database/models/vendorType')

module.exports = (req, res) => {
    const {requestedType} = req.params
    if(requestedType==='washType'){
        washType.find({}, (error, result) => {
            if(error){
                return res.status(400).json(error)
            }
            return res.status(200).json(result)
        })
    } else if(requestedType==='service'){
        service.find({}, (error, result) => {
            if(error){
                return res.status(400).json(error)
            }
            return res.status(200).json(result)
        })
    } else if(requestedType==='vendorType'){
        vendorType.find({}, (error, result) => {
            if(error){
                return res.status(400).json(error)
            }
            return res.status(200).json(result)
        })
    }
}