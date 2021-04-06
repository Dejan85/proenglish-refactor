const mongoose = require("mongoose");

const eventsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  time: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: Date
});

module.exports = mongoose.model("Event", eventsSchema);
