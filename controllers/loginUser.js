const bcrypt = require('bcrypt')
const user = require('../database/models/user')
const vendor = require('../database/models/vendor')
const admin = require('../database/models/admin');

module.exports = (req, res) => {
    const { phone, email, password, designation } = req.body;
    if(designation==='user')
        user.findOne({ phone }, (error, userInfo) => {
            if (userInfo) {
                bcrypt.compare(password, userInfo.password, function(err, result) {
                    if(!result)
                        return res.status(400).json('Wrong password')
                    return res.status(200).json(userInfo)
                });
            } else {
                return res.status(400).json('User not found')
            }
        })
    else if(designation==='vendor')
        vendor.findOne({ phone }, (error, vendorInfo) => {
            if (vendorInfo) {
                bcrypt.compare(password, vendorInfo.password, function(err, result) {
                    if(!result)
                        return res.status(400).json('Wrong password')
                    return res.status(200).json(vendorInfo)
                });
            } else {
                return res.status(400).json('Vendor not found')
            }
        })
    else if(designation==='admin')
        admin.findOne({ email }, (error, adminInfo) => {
            if (adminInfo) {
                bcrypt.compare(password, adminInfo.password, function(err, result) {
                    if(!result)
                        return res.status(400).json('Wrong password')
                    return res.status(200).json(adminInfo)
                });
            } else {
                return res.status(400).json('Admin not found')
            }
        })
}