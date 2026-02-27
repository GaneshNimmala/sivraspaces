// controllers/authController.js
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Assuming you have a User model

// Handle login request
const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.render('login', { error: 'Invalid credentials' });
    }
    req.session.userId = user.id; // Store user ID in session
    res.redirect('/admin'); // Redirect to admin dashboard
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

// Handle logout
const logout = (req, res) => {
  req.session.destroy();
  res.redirect('/');
};


const signup = async (req, res) => {
  const { username, password } = req.body;
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new user
    await User.create({ username, password: hashedPassword });
    res.redirect('/login'); // Redirect to login page
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

// Other authentication-related functions go here

module.exports = {login, logout, signup};
