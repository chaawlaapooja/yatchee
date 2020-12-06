const washType = require('../database/models/washType')
const service = require('../database/models/service')

module.exports = (req, res) => {
    const {name, price, addTo} = req.body
    if(addTo==='washType'){
        washType.create({name, pricePerFeet : price}, (error, result) => {
            if(error){
                return res.status(400).json(error)
            }
            return res.status(200).json('success')
        })
    } else if(addTo==='service'){
        service.create({name, price}, (error, result) => {
            if(error){
                return res.status(400).json(error)
            }
            return res.status(200).json('success')
        })
    }
}