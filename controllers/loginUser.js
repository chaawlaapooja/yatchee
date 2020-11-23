const bcrypt = require('bcrypt')
const user = require('../database/models/user')

module.exports = (req, res) => {
    const { phone, password } = req.body;
    user.findOne({ phone }, (error, user) => {
        if (user) {
            // bcrypt.compare(password, user.password, function(err, result) {
            //     if(err)
            //         return res.status(400).json('Wrong password')
            //     return res.status(200).json({_id:user._id, username:user.username, name:user.name, boatBreadth:user.boatBreadth, boatLength:user.boatBreadth, boatBrand:user.boatBrand, phone:user.phone})
            // });
            if(user.password!==password)
                return res.status(400).json('Wrong password')
            else
                return res.status(200).json({_id:user._id, username:user.username, name:user.name, boatBreadth:user.boatBreadth, boatLength:user.boatBreadth, boatBrand:user.boatBrand, phone:user.phone});
        } else {
            return res.status(400).json('User not found')
        }
    })
}