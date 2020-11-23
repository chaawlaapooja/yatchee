const bcrypt = require('bcrypt')
const user = require('../database/models/user')

module.exports = (req, res) => {
    const { phone } = req.body;
    user.findOne({ phone }, (error, user) => {
        if (user) {
            return res.status(200).json('true')
        } else {
            return res.status(400).json('User not found')
        }
    })
}