const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const Visit = require("./models/Visit");

const app = express();
const PORT = 8000;

// Middleware
app.use(
  cors({
    origin: "*", 
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/scheduleVisits") // Removed deprecated options
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB:", err));

// Routes
app.post("/api/schedule-visit", async (req, res) => {
  const { parentFirstName, parentMiddleName, parentLastName, parentPhone, parentEmail, tourDate, tourTime } = req.body;
  console.log("incoming data is,", req.body)

  // Validation
  if (!parentFirstName || !parentLastName || !parentEmail || !tourDate || !parentPhone) {
    return res.status(400).json({ error: "All required fields must be filled out." });
  }

  try {
    // Create and save a new visit
    const newVisit = new Visit({
      parentFirstName,
      parentMiddleName,
      parentLastName,
      parentPhone,
      parentEmail,
      tourDate,
      tourTime,
    });

    await newVisit.save(); // Save to MongoDB
    res.status(201).json({ message: "Visit scheduled successfully!", visit: newVisit });
  } catch (error) {
    console.error("Error saving visit:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
