const mongoose = require("mongoose");

const querySchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    match: [/^\+91\s?[0-9]{5}\s?[0-9]{5}$/, "Invalid phone number format"]
  },
  email: {
    type: String,
    required: false,
    lowercase: true,
    trim: true
  },
  requirement: {
    type: String,
    enum: ["Single", "Double","Triple"], 
    required: true
  },
  address: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("query", querySchema);
