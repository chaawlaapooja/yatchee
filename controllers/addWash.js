const wash = require('../database/models/wash')

module.exports = (req, res) => {
	const {locationName, longitude, latitude} = req.body;
  wash.create({...req.body, location:{type:locationName, coordinates:[longitude,latitude]}}, (error, user) => {
    if(error){
        return res.status(400).json(error)
    }
    return res.status(200).json('Wash requested succesfully')
    })
}

