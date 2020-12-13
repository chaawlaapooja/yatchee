const checkUpCost = require('../database/models/checkupCost')

module.exports = (req, res) => {
    const {cost} = req.body
    checkUpCost.updateOne({_id:'5fbb72b5b762dd4158ba3b22'},{$set :
        {
            checkupCost:cost
        }}, (error, result)=>{
                if(error)
                    return res.status(400).json(error)
                else {
                    if(result.nModified===1)
                        return res.status(200).json('success')
                    else 
                        return res.status(200).json('no changes done')
                }
        }
    )
}