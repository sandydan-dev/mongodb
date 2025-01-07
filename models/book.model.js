const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  publishedYear: Number,
  genre: {
    type: [String],
    enum: [
      "Fiction",
      "Romance",
      "Historical",
      "Fantasy",
      "Mystery",
      "Thriller",
      "Non-Fiction",
      "Self-help",
    ],
  },
  language: String,
  country: String,
  rating: {
    type: Number,
    min: 0,
    max: 10,
    default: 0,
  },
  summary: String,
  coverImageUrl: String,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
