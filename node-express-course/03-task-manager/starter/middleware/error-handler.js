const {CustomAPIError} = require('../errors/custom-error')
const errorHandlerMidddleware = (err,req,res,next) => {
    if(err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({msg: err.message})
    } else {
        return res.status(500).json({msg:'Something went wrong, please try agian'})
    }
}

module.exports = errorHandlerMidddleware