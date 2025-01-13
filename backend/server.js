const express = require('express')
const bodyParser = require("body-parser")
const cors = require("cors")
const nodemailer = require("nodemailer");
const { time } = require('console');

const app = express();
const PORT = 8000;

//MW
app.use(cors);
app.use(bodyParser.json());

//POST 

app.post("/api/schedule-visit", async (req, res) => {
  const {firstName, lastName, email, dateSelected, timeSelected  } = req.body;

  if (!firstName || !lastName || !email || !dateSelected || !timeSelected){
    return res.status(400).json({error: "All fields required"});
  }

  const nodeMailerTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "yardleyfrausto20@gmail.com",
      pass: "Volleyball23",
    }
  });

  const mailOptions = {
    from: "yardleyfrausto20@gmail.com",
    to: email,
    subject: "Daycare Visit Scheduled",
    html: `
    <h1>Hello ${firstName}</h1>
    <p>thank you for scheduling a visit</p>
    <p>Here are your appointment details</p>
    <ul>
      <li>Date: ${dateSelected}</li>
      <li>Time: ${timeSelected}</li>
    </ul>
    `,
  };

  try {
    await nodeMailerTransporter.sendMail(mailOptions);
    res.status(200).json({message: "visit scheduled succesffuly! Confirmation email sent."})
  } catch (error){
    console.error("error sending email: ", error);
    res.status(500).json({error: "Failed to send confirmation email"});
  }

  console.log('Form data received:', req.body);

});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
});