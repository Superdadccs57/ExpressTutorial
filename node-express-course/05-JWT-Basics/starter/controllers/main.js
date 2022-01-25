// check username, password in post(login) request
//if exist create new JWT
//Send back to front-end

//setup authentication so only the request with JWT can access the dashboard
const CustomAPIError = require('../errors/custom-error')

const login = async (req,res) =>{
    const {username, password} = req.body

    // auth options
    // mongo Validations
    //Joi 
    //check in the controller
    if(!username || !password) {
        throw new CustomAPIError('Please Provide email and password',400)
    }
    res.send('Fake Login/Register/Signup Route')
}

const dashboard = async (req,res) =>{
    const luckyNumber = Math.floor(Math.random() *100)
    res.status(200).json({msg:`Hello, Thomas`, secret:`Here is your lucky number ${luckyNumber}`})
}

module.exports = {login, dashboard}