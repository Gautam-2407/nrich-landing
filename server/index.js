const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.post('/api/submit-form', (req, res) => {
  const formData = req.body;

  // Validate form data (implement your validation logic)

  // Send email
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'officalgautam2407@gmail.com',
      pass: 'uhaj ohar eghh zmof',
    },
  });

  const mailOptions = {
    from: 'officalgautam2407@gmail.com',
    to: 'officalgautam2407@gmail.com',
    subject: 'New Form Submission',
    text: `Name: ${formData.name}\nEmail: ${formData.phone}\nLMS: ${formData.lmsN}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
