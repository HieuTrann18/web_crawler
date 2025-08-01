const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true,
    unique: true
  },

  publishedAt: {
    type: Date,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Article", articleSchema);
