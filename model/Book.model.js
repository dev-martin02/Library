const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
  Author: String,
  bookName: String,
  type: String,
  description: String,
});

const Book = mongoose.model("Book", bookSchema, "books");

module.exports = Book;
