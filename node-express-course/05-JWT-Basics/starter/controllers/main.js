// check username, password in post(login) request
//if exist create new JWT
//Send back to front-end

//setup authentication so only the request with JWT can access the dashboard
const jwt = require('jsonwebtoken')
const {badRequestError}= require('../errors')

const login = async (req,res) =>{
    const {username, password} = req.body

    // auth options
    // mongo Validations
    //Joi 
    //check in the controller
    if(!username || !password) {
        throw new badRequestError('Please Provide email and password')
    }

    // just for demo, normally provided by DB!
    const id = new Date().getDate()

    // try to keep payload small, better ux
    // just for demo, in production use long, complex and unguessable string value!!
    const token = jwt.sign({id, username},process.env.JWT_SECRET,{expiresIn:'30d'})
    
    res.status(200).json({msg:'user created',token})
}

const dashboard = async (req,res) =>{
    console.log(req.user);
    const luckyNumber = Math.floor(Math.random() *100)
        res.status(200).json({
            msg:`Hello, ${req.user.username}`, 
            secret:`Here is your lucky number ${luckyNumber}`
        })
}

module.exports = {login, dashboard}