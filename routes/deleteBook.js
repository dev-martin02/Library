const express = require("express");
const route = express.Router();
const booksControllers = require("../controllers/books");

route.delete("/deleteBook/:_id", booksControllers.deleteBook);

module.exports = route;
