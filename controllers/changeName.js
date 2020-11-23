const user = require('../database/models/user')
const vendor = require('../database/models/vendor')

module.exports = (req, res) => {
  const {name, _id, designation} = req.body
  if(designation==='user'){
    user.updateOne({_id},{$set:{name}},(error, user) => {
      if(error){
          return res.status(400).json(error)
      }
      return res.status(200).json(user)
    })
  } else if(designation==='vendor'){
    vendor.updateOne({_id},{$set:{name}},(error, result) => {
      if(error){
          return res.status(400).json(error)
      }
      return res.status(200).json(result)
    })
  }
  
}