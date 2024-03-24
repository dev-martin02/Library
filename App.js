const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const { default: mongoose } = require("mongoose");
const Book = require("./model/Book.model");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  getBooks()
    .then((books) => {
      res.render("home", { bookArray: books }); // Pass bookArray to the template
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving books"); // Handle errors gracefully
    });
});

app.get("/bookForm", (req, res) => {
  res.render("bookForm");
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

async function getBooks() {
  try {
    const book = await Book.find();
    // const result = book.map(({ bookName }) => console.log(bookName));
    return book;
  } catch (e) {
    console.log(e.message);
  }
}
