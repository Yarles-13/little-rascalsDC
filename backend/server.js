const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 8000;


app.use(cors());
app.use(bodyParser.json());


app.post("/api/schedule-visit", (req, res) => {
  const { parentFirstName, parentLastName, parentEmail, tourDate, tourTime } = req.body;


  if (!parentFirstName || !parentLastName || !parentEmail || !tourDate) {
    return res.status(400).json({ error: "All fields are required" });
  }

  console.log("Visit Scheduled:");
  console.log(`Parent Name: ${parentFirstName} ${parentLastName}`);
  console.log(`Email: ${parentEmail}`);
  console.log(`Date: ${tourDate}`);
  console.log(`Time: ${tourTime}`);


  console.log("incoming req", req.body);
  res.status(200).json({ message: "Visit scheduled successfully!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
