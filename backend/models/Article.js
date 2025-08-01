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
  },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },

   priority: {
    type: Number,
    default: 5,
    min: 1,
    max: 10
  }

}, { timestamps: true });

module.exports = mongoose.model("Article", articleSchema);
