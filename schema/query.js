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
    required: false
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
