const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
  author: String,
  bookName: String,
  genre: String,
  description: String,
});

const Book = mongoose.model("Book", bookSchema, "books");

module.exports = Book;
