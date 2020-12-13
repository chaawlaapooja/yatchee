const washType = require('../database/models/washType')
const service = require('../database/models/service')

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
                        return res.status(200).json('success')
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
                        return res.status(200).json('success')
                    }
            }
        )
    }
}