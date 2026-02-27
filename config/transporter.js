const nodemailer = require("nodemailer");

// Create a transporter using your email credentials
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, 
  auth: {
    user: "ganeshnimmala65@gmail.com",
    pass: 'ssrk puwj jzly jtud',
  },
});

module.exports = transporter;
