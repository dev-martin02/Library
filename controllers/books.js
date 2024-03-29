const Book = require("../model/Book.model");

exports.showBooks = async (req, res) => {
  try {
    const response = await Book.find();
    res.send(response);
    // res.render("home", { bookArray: books });
  } catch (e) {
    console.log(e.message);
  }
};

exports.addBook = (req, res) => {
  const response = req.body;
  const book = new Book(response);
  console.log(response);
  book
    .save()
    .then(() => console.log("book Save it!"))
    .catch((e) => console.log(e.message));
  res.send("done");
};
