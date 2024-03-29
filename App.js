// Dependencies
require("dotenv").config();
const express = require("express");
const app = express();
const { default: mongoose } = require("mongoose");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "pug");
const addBookForm = require("./routes/addBookForm");
const getBooks = require("./routes/getBooks");

app.use(addBookForm);
app.use(getBooks);

// DataBase Connection
mongoose
  .connect(process.env.SecretKey)
  .then(() => {
    console.log("dataBase is running");
    app.listen(2000, () => console.log("server is running"));
  })
  .catch(() => console.log("fail"));
