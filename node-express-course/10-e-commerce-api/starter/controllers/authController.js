const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const bcrypt = require('bcryptjs');

const registerController = async (req, res) => {
    const { name, email, password } = req.body
    const emailAlreadyExists = await User.findOne({ email })
    if (emailAlreadyExists) {
        throw new CustomError.BadRequestError('Email already exists')
    }
    const salt = await bcrypt.genSalt(16);
    const hashPassword = await bcrypt.hash(password,salt)
    const tempUser = {name,email,password:hashPassword}

    const user = await User.create({ ...tempUser });
    res.status(StatusCodes.CREATED).json({ user });
}

const loginController = async (req, res) => {
    res.send('Login User')
}

const logoutController = async (req, res) => {
    res.send('Logout User')
}


module.exports = {
    registerController,
    loginController,
    logoutController
}