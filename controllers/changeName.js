const user = require('../database/models/user')
const vendor = require('../database/models/vendor')

module.exports = (req, res) => {
  const {name, _id, firstName, lastName, designation} = req.body
  if(designation==='user'){
    user.updateOne({_id},{$set:{name}},(error, result) => {
      if(error){
          return res.status(400).json(error)
      } else {
        if(result.nModified>=1)
          return res.status(200).json('name updated successfully')
        else
          return res.status(200).json('no changes done')
      }
    })
  } else if(designation==='vendor'){
    vendor.updateOne({_id},{$set:{firstName, lastName}},(error, result) => {
      if(error){
          return res.status(400).json(error)
      } else {
        if(result.nModified>=1)
          return res.status(200).json('name updated successfully')
        else
          return res.status(200).json('no changes done')
      }
    })
  }
  
}