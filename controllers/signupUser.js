const user = require('../database/models/user')
const vendor = require('../database/models/vendor')

module.exports = (req, res) => {
  const {name, phone, username, password, profilePicture, designation} = req.body
  if(designation==='user'){
    user.create({name, phone, username, password}, (error, user) => {
      if(error){
          return res.status(400).json(error)
      }
      return res.status(200).json(user)
    })
  } else if(designation==='vendor'){
    vendor.create({name, phone, username, password, profilePicture}, (error, result) => {
      if(error){
          return res.status(400).json(error)
      }
      return res.status(200).json(result)
    })
  }
  
}