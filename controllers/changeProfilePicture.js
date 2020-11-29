const vendor = require('../database/models/vendor')

module.exports = (req, res) => {
  const {profilePicture, _id} = req.body
    vendor.updateOne({_id},{$set:{profilePicture}},(error, result) => {
      if(error){
          return res.status(400).json(error)
      } else if(result.nModified===1){
        return res.status(200).json('profile picture updated successfully');
      }
    })
  
}