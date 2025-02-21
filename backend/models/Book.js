const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  thumbnail: { type: String, required: true },
  rating: { type: Number, default: 0 },
  reviews: [{ user: String, comment: String }],
});

module.exports = mongoose.model('Book', BookSchema);