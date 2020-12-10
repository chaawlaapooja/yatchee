const bcrypt = require('bcrypt')
const user = require('../database/models/user')
const admin = require('../database/models/admin');

module.exports = (req, res) => {
    const { phone, _id, checkFor } = req.body;
    if(checkFor==='user')
        user.findOne({ phone }, (error, userInfo) => {
            if (userInfo) {
                return res.status(200).json('true')
            } else {
                return res.status(400).json('User not found')
            }
        })
    else if(checkFor==='admin'){
        admin.findOne({ _id }, (error, adminInfo) => {
            if (adminInfo) {
                return res.status(200).json('true')
            } else {
                return res.status(400).json('User not found')
            }
        })
    }
}