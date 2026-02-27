const express = require("express");
const path = require("path");
const contactus = express.Router();
const transporter = require("../config/transporter");

contactus.post("/submit", async function (req, res) {
  const { name, email, mobile, serviceinterested, message } = req.body;
  
  // Set up email data
  const mailOptions = {
    from: "ganeshnimmala65@gmail.com", // Replace with your email
    to: "ganeshnimmala65@gmail.com", // Destination email
    subject: `Contact Form Submission from ${name}`,
    html: `<html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style>
        body {
          font-family: "Times New Roman", Times, serif;
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
          font-size: larger;
          line-height: 25px;
          letter-spacing: 0.3px;
          font-weight: bold;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          background-color:rgba(230, 230, 230, 0.89);
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0px 0px 10px rgba(210, 210, 210, 0.1);
          color: white;
        }
        img {
          display: block;
          margin: 0 auto;
          border-radius: 50%;
        }
        p {
          margin: 10px 0;
          color: black;
        }
        strong {
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <p>Hi Team,</p>
        <p>You have received a new contact form submission from a user, Here are the details:</p>
  
        <p>Name: ${name}</p>
        <p>Mobile Number: ${mobile}</p>
        <p>Email: ${email}</p>
        <p>Service Interested: ${serviceinterested}</p>
        <p>Message: ${message}</p>
  
        <h5>Thank You</h5>
      </div>
    </body>
  </html>
  `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.sendStatus(200);
  } catch (error) {
    console.error("Error sending email:", error);
    return res.sendStatus(500);
  }
});

module.exports = contactus;
