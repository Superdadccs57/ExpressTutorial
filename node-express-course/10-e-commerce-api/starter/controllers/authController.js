const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const { attachCookiesToResponse } = require('../utils');

const registerController = async (req, res) => {
  // Bring in user keys
  const { name, email, password } = req.body;

  // Check to see if email exists already and throw err if it does
  const emailAlreadyExists = await User.findOne({ email });
  if (emailAlreadyExists) {
    throw new CustomError.BadRequestError('Email already exists');
  }

  // First registered user is an admin
  const isFirstAccount = (await User.countDocuments({})) === 0;
  const role = isFirstAccount ? 'admin' : 'user';

  // Create the user in the database
  const user = await User.create({ name, email, password, role });

  // Issue JWT
  const tokenUser = { name: user.name, userId: user._id, role: user.role };
  
    attachCookiesToResponse({ res, user: tokenUser });

    res.status(StatusCodes.CREATED).json({ user: tokenUser });
};

const loginController = async (req, res) => {
  res.send('Login User');
};

const logoutController = async (req, res) => {
  res.send('Logout User');
};

module.exports = {
  registerController,
  loginController,
  logoutController,
};
