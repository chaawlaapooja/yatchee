const wash = require('../database/models/wash')

module.exports = (req, res) => {
	
  wash.create(req.body, (error, user) => {
    if(error){
        return res.status(400).json(error)
    }
    return res.status(200).json('Wash requested succesfully')
    })
}