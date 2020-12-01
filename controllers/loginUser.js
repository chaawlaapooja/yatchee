const bcrypt = require('bcrypt')
const user = require('../database/models/user')
const vendor = require('../database/models/vendor')

module.exports = (req, res) => {
    const { phone, password, designation } = req.body;
    if(designation==='user')
        user.findOne({ phone }, (error, user) => {
            if (user) {
                bcrypt.compare(password, user.password, function(err, result) {
                    if(!result)
                        return res.status(400).json('Wrong password')
                    return res.status(200).json(user)
                });
            } else {
                return res.status(400).json('User not found')
            }
        })
    else if(designation==='vendor')
        vendor.findOne({ phone }, (error, user) => {
            if (user) {
                bcrypt.compare(password, user.password, function(err, result) {
                    if(!result)
                        return res.status(400).json('Wrong password')
                    return res.status(200).json(user)
                });
            } else {
                return res.status(400).json('Vendor not found')
            }
        })
}