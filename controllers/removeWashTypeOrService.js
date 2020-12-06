const washType = require('../database/models/washType')
const service = require('../database/models/service')

module.exports = (req, res) => {
    const {_id, remove} = req.body
    if(remove==='washType'){
        washType.deleteOne({_id:_id}, (error) => {
            if(error) 
                return res.status(400).json('error')
            else
                return res.status(200).json('success')
        })
    } else if(remove==='service'){
        service.deleteOne({_id:_id}, (error) => {
            if(error) 
                return res.status(400).json('error')
            else
                return res.status(200).json('success')
        })
    }
}