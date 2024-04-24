const express = require("express");
const route = express.Router();
const booksControllers = require("../controllers/books");

route.get("/", booksControllers.showBooks);
route.get("/bookInfo/:_id", booksControllers.findOneBook);

route.post("/addBookForm", booksControllers.addBook);
route.delete("/deleteBook/:_id", booksControllers.deleteBook);

module.exports = route;
