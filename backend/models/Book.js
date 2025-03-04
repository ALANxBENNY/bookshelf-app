const mongoose = require("mongoose");

// Define the Book schema
const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true, // Remove extra spaces
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      default: 0,
      min: 0, // Ensure rating is not negative
      max: 5, // Ensure rating does not exceed 5
    },
    reviews: [
      {
        user: {
          type: String,
          required: true,
          trim: true,
        },
        comment: {
          type: String,
          required: true,
          trim: true,
        },
      },
    ],
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Create the Book model
const Book = mongoose.model("Book", bookSchema);

// Export the Book model
module.exports = Book;