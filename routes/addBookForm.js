const express = require("express");
const route = express.Router();
const booksControllers = require("../controllers/books");

route.post("/addBookForm", booksControllers.addBook);

module.exports = route;
