const vendor = require('../database/models/vendor')

module.exports = (req, res) => {
    const { _id } = req.body;
    vendor.findOne({ _id }, (error, vendorInfo) => {
        if (vendorInfo) {
            return res.status(200).json(vendorInfo)
        } else {
            return res.status(400).json('Vendor not found')
        }
    }).populate('feedbacks')
}