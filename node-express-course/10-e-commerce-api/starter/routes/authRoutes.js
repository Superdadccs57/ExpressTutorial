// Import Router Method
const express = require('express');
const router = express.Router();

// Import The controller functions

const {
  registerController,
  loginController,
  logoutController,
} = require('../controllers/authController');

// Create the routes

router.get('/logout', logoutController);
router.post('/register', registerController);
router.post('/login', loginController);

module.exports = router;
