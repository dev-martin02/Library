const Book = require("../model/Book.model");

exports.showBooks = async (req, res) => {
  try {
    const response = await Book.find();
    const books = await response.map(({ bookName }) => bookName);
    res.render("home", { bookArray: books });
    console.log(books);
  } catch (e) {
    console.log(e.message);
  }
};

exports.addBook = (req, res) => {
  const response = req.body;
  const book = new Book(response);
  book
    .save()
    .then(() => console.log("book Save it!"))
    .catch((e) => console.log(e.message));
  res.redirect("/bookForm");
};
