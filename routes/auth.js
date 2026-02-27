const express = require('express');
const authRouter = express.Router();
const {login, logout, signup} = require('../controllers/authController');

// Handle login request
authRouter.route('/login').post(login);

// Handle logout
authRouter.route('/logout').get(logout);

// Other authentication routes go here

// Display signup form
authRouter.get('/signup', (req, res) => {
    res.render('signup');
});
  
// Handle signup request
authRouter.route('/signup').post(signup);
  
module.exports = authRouter;
