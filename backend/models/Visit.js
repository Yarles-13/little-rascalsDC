const mongoose = require("mongoose");

const VisitSchema = new mongoose.Schema({
  parentFirstName: {type: String, required: true},
  parentLastName: {type: String, required: true},
  parentMiddleName: {type: String},
  parentPhone: {type: String, required: true},
  parentEmail: {type: String, required: true},
  tourDate: {type: String, required: true},
  tourTime: {type: String, required: true},
})

module.exports = mongoose.model("Visit", VisitSchema);