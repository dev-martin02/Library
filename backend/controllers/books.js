const Book = require("../model/Book.model");

exports.showBooks = async (req, res) => {
  try {
    const response = await Book.find();
    res.send(response);
  } catch (e) {
    console.log(e.message);
  }
};

exports.addBook = (req, res) => {
  const imageName = req.file ? req.file.filename : ""; // How can I improve this line? Can I put a default broken Img?
  const book = new Book({
    author: req.body.author,
    bookName: req.body.bookName,
    genre: req.body.genre,
    description: req.body.description,
    imageName: imageName,
  });
  book
    .save()
    .then(() => console.log("book Save it!"))
    .catch((e) => console.log(e.message));
  res.status(201).json({ message: "Book saved successfully!" });
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
  } catch (e) {
    console.log(e.message);
  }
};

exports.updateBook = async (req, res) => {
  try {
    console.log(req.params._id);
    const findTheBook = await Book.findOne({ _id: req.params._id });
    console.log(req.body);
    const { bookName, genre, description } = req.body;

    findTheBook.description = description;
    findTheBook.bookName = bookName || findTheBook.bookName;
    findTheBook.genre = genre || findTheBook.genre;

    // Await the save operation
    await findTheBook.save();

    // Log the update success message
    console.log(`The description of this ${findTheBook.bookName} was updated`);

    // Send the updated book data as the response
    res.status(200).send(findTheBook);
    console.log(findTheBook);
  } catch (error) {
    console.log(error.message);
  }
};
