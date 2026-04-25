const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/api/contact', async (req, res) => {
  const { name, email, service, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please fill all fields' });
  }

  // Create Transporter
  // NOTE: You need to set these in your .env file
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || 'yogeshthorat612@gmail.com',
      pass: process.env.EMAIL_PASS // App Password from Google
    }
  });

  const mailOptions = {
    from: email,
    to: 'yogeshthorat612@gmail.com',
    subject: `New Inquiry from ${name} - ${service}`,
    text: `
      Name: ${name}
      Email: ${email}
      Service: ${service}
      Message: ${message}
    `,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee;">
        <h2 style="color: #6366f1;">New Inquiry from Yoga Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p style="background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Email Error:', error);
    res.status(500).json({ success: false, message: 'Failed to send message. Please check server logs.' });
  }
});

app.get('/', (req, res) => {
  res.send('Yoga API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
