const Book = require("../model/Book.model");

exports.showBooks = async (req, res) => {
  try {
    const response = await Book.find();
    res.send(response);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

exports.addBook = async (req, res) => {
  try {
    const imageName = req.file ? req.file.filename : ""; // How can I improve this line? Can I put a default broken Img?
    const book = new Book({
      author: req.body.author,
      bookName: req.body.bookName,
      genre: req.body.genre,
      description: req.body.description,
      imageName: imageName,
    });

    await book.save();
    res.status(201).json({ message: "Book saved successfully!" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
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
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.findOneBook = async (req, res) => {
  try {
    const response = await Book.findOne({ _id: req.params });
    res.send(response);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const bookFound = await Book.findOne({ _id: req.params._id });

    const { bookName, genre, description } = req.body;

    bookFound.description = description || bookFound.description;
    bookFound.bookName = bookName || bookFound.bookName;
    bookFound.genre = genre || bookFound.genre;

    await bookFound.save();
    res.status(200).json({
      message: `The description of the book "${bookFound.bookName}" was updated`,
    });
  } catch (error) {
    console.log(error.message);
  }
};
