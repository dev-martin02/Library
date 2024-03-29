const express = require("express");
const route = express.Router();
const booksControllers = require("../controllers/books");

route.get("/", booksControllers.showBooks);

module.exports = route;
