const mongoose = require('mongoose')

const checkupCostSchema = new mongoose.Schema({
    checkupCost : {type:Number, required:true},
})

const checkupcost = mongoose.model('checkupCost', checkupCostSchema)

module.exports = checkupcost