const vendor = require('../database/models/vendor')

module.exports = (req, res) => {
    const { _id } = req.body;
    vendor.findOne({ _id }, (error, vendor) => {
        if (vendor) {
            return res.status(200).json(vendor)
        } else {
            return res.status(400).json('Vendor not found')
        }
    }).populate('feedbacks')
}