// Dependencies
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const addBookForm = require("./routes/addBookForm");
const getBooks = require("./routes/getBooks");
const bookInfo = require("./routes/bookInfo");
const deleteBook = require("./routes/deleteBook");

app.use(addBookForm);
app.use(getBooks);
app.use(bookInfo);
app.use(deleteBook);

// DataBase Connection
mongoose
  .connect(process.env.SecretKey)
  .then(() => {
    console.log("dataBase is running");
    app.listen(2000, () => console.log("server is running"));
  })
  .catch(() => console.log("fail"));
