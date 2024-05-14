const mongoose = require("mongoose");

// Add more properties, unique and required

const bookSchema = new mongoose.Schema({
  author: { type: String, require: true },
  bookName: { type: String, require: true },
  genre: { type: String, require: true },
  description: { type: String, require: true },
  imageName: { type: String, require: true },
});

const Book = mongoose.model("Book", bookSchema, "books");

module.exports = Book;
