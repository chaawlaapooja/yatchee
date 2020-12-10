const user = require('../database/models/user')
const vendor = require('../database/models/vendor')
const admin = require('../database/models/admin');

module.exports = (req, res) => {
  const {name, email, firstName, lastName, phone, username, password, washTypesProvided, servicesProvided, designation} = req.body
  if(designation==='user'){
    user.create({name, phone, username, password}, (error, userInfo) => {
      if(error){
          return res.status(400).json(error)
      }
      return res.status(200).json(userInfo)
    })
  } else if(designation==='vendor'){
    vendor.create({firstName, lastName, phone, username, password, washTypesProvided, servicesProvided}, (error, result) => {
      if(error){
          return res.status(400).json(error)
      }
      return res.status(200).json(result)
    })
  } else if(designation==='admin'){
    admin.create({email, password}, (error, result) => {
      if(error){
          return res.status(400).json(error)
      }
      return res.status(200).json(result)
    })
  }
  
}