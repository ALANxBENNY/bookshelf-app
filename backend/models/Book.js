const mongoose = require("mongoose");

// Define the Book schema
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: String,
      comment: String,
    },
  ],
});

// Create the Book model
const Book = mongoose.model("Book", bookSchema);

// Export the Book model
module.exports = Book;