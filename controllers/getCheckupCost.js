const checkUpCost = require('../database/models/checkupCost')

module.exports = (req, res) => {
    checkUpCost.findOne({_id:'5fbb72b5b762dd4158ba3b22'}, (error, result)=>{
                if(error)
                    return res.status(400).json(error)
                else{
                    return res.status(200).json(result.checkupCost)
                }
        }
    )
}