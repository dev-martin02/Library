const Book = require("../model/Book.model");

exports.showBooks = async (req, res) => {
  try {
    const response = await Book.find();
    res.send(response);
  } catch (e) {
    console.log(e.message);
  }
};

exports.addBook = (req, res, next) => {
  const response = req.body;
  const book = new Book(response);
  book
    .save()
    .then(() => console.log("book Save it!"))
    .catch((e) => console.log(e.message));
  res.redirect("http://localhost:3000");
};

exports.deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params._id);
    if (!deletedBook) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).json({ error: "Internal server error" }); // Return internal server error if something goes wrong
  }
};

exports.findOneBook = async (req, res) => {
  try {
    const response = await Book.findOne({ _id: req.params });
    res.send(response);
  } catch (e) {
    console.log(e.message);
  }
};
