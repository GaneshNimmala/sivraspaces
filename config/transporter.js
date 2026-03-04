const nodemailer = require("nodemailer");

// Create a transporter using your email credentials
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, 
  auth: {
    user: "",
    pass: '',
  },
});

module.exports = transporter;
