const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  posterUrl: String,
  genre: [String],
  rating: Number,
  language: String
});

module.exports = mongoose.model('Movie', movieSchema);
