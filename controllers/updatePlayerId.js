const user = require('../database/models/user')

module.exports = (req, res) => {
    const {_id, androidPlayerID, iosPlayerID} = req.body
    user.updateOne({_id:_id},{$set :
        {
            androidPlayerID, iosPlayerID,
        }}, (error, result)=>{
                if(error)
                    return res.status(400).json(error)
                else {
                    if(result.nModified===1)
                        return res.status(200).json('player id updated successfully')
                    else    
                        return res.status(200).json('no changes done')
                }
        }
    )
}