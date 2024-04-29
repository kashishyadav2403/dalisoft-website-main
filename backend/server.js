const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

// Middleware to enable CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // Allow specified methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specified headers
  if (req.method === 'OPTIONS') {
    // Respond to OPTIONS requests
    res.sendStatus(200);
  } else {
    next(); // Continue processing other requests
  }
});

// Create nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'kashish.yadav@dalisoft.in', // Your email
    pass: 'fcdx ogfp qilw fzwo' // Your email password
  }
});

app.post('/send-email', (req, res) => {
  const formData = req.body;

  // Email content
  const mailOptions = {
    from: formData.email,
    to: 'kashish.yadav@dalisoft.in', // Your email
    subject: 'New Form Submission',
    html: `
      <p>Name: ${formData.name}</p>
      <p>Email: ${formData.email}</p>
      <p>Contact Number: ${formData.contactNumber}</p>
      <p>Message: ${formData.message}</p>
    `
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
