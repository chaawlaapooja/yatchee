const washType = require('../database/models/washType')
const service = require('../database/models/service')
const vendorType = require('../database/models/vendorType')

module.exports = (req, res) => {
    const {_id, name, price, edit} = req.body
    if(edit==='washType'){
        washType.updateOne({_id:_id},{$set :
            {
                name, pricePerFeet:price
            }}, (error, result)=>{
                    if(error)
                        return res.status(400).json(error)
                    else if(result.nModified===1){
                        return res.status(200).json('WashType/Service info updated successfully')
                    }
            }
        )
    } else if(edit==='service'){
        service.updateOne({_id:_id},{$set :
            {
                name, price
            }}, (error, result)=>{
                    if(error)
                        return res.status(400).json(error)
                    else if(result.nModified===1){
                        return res.status(200).json('Service info updated successfully')
                    }
            }
        )
    } else if(edit==='vendorType'){
        vendorType.updateOne({_id:_id},{$set :
            {
                name
            }}, (error, result)=>{
                    if(error)
                        return res.status(400).json(error)
                    else if(result.nModified===1){
                        return res.status(200).json('Vendor type info updated successfully')
                    }
            }
        )
    }
}