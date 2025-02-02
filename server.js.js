const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config(); // Load environment variables

const app = express();
app.use(express.json()); // Enable parsing JSON request bodies

const PORT = process.env.PORT || 3000;

// Email Configuration (using Gmail)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER, // Your Gmail address (aaa@gmail.com)
    pass: process.env.GMAIL_PASSWORD, // Your Gmail app password (see step 3)
  },
});

// POST API Endpoint
app.post("/api/v1/notification", (req, res) => {
  const { to, subject, body } = req.body; // Get data from the request body

  if (!to || !subject || !body) {
    return res
      .status(400)
      .json({ error: "Missing required fields (to, subject, body)" });
  }

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: to,
    subject: subject,
    html: body, // or text: body for plain text email
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Failed to send email" });
    } else {
      console.log("Email sent:", info.response);
      return res.status(200).json({ message: "Email sent successfully" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
