const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    author: { type: String, require: true },
    bookName: { type: String, require: true },
    genre: { type: String, require: true },
    description: { type: String, require: true },
    imageName: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema, "books");

module.exports = Book;
