const express = require("express");
const route = express.Router();
const booksControllers = require("../controllers/books");

route.get("/bookInfo/:_id", booksControllers.findOneBook);

module.exports = route;
