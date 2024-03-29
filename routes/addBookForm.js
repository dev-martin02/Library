const express = require("express");
const route = express.Router();
const booksControllers = require("../controllers/books");

// route.get("/bookForm", (req, res) => {
//   res.render("bookForm");
// });

route.post("/addBookForm", booksControllers.addBook);

module.exports = route;
