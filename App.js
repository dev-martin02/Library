const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const { default: mongoose } = require("mongoose");
const Book = require("./model/Book.model");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "pug");

async function getBooks() {
  try {
    const book = await Book.find();
    return book;
  } catch (e) {
    console.log(e.message);
  }
}
const showBook = async (req, res) => {
  try {
    const response = await getBooks();
    const books = await response.map(({ bookName }) => bookName);
    res.render("home", { bookArray: books });
    console.log(books);
  } catch (e) {
    console.log(e.message);
  }
};

app.get("/", showBook);

app.get("/bookForm", (req, res) => {
  res.render("bookForm");
});

app.get("/deleteForm", (req, res) => {
  res.render("deleteBook");
  s;
});

app.post("/send", (req, res) => {
  const response = req.body;
  const book = new Book(response);
  book
    .save()
    .then(() => console.log("book Save it!"))
    .catch((e) => console.log(e.message));

  res.redirect("/bookForm");
});

// DataBase Connection
mongoose
  .connect(
    "mongodb+srv://MartinBooks:Carla123@bookstore.xmbaner.mongodb.net/?retryWrites=true&w=majority&appName=bookStore"
  )
  .then(() => {
    console.log("dataBase is running");
    app.listen(2000, () => console.log("server is running"));
  })
  .catch(() => console.log("fail"));

// How will you delete certain book?
// Mongoose use this approch syntax => Model.deleteOne()
