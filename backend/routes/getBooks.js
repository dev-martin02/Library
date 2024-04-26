const express = require("express");
const route = express.Router();
const booksControllers = require("../controllers/books");

route.get("/", booksControllers.showBooks);
route.post("/addBookForm", booksControllers.addBook);

/* 

Try another way to implement the routers something like this
route('/bookInfo')
.get("/_id")
.delete("/_id")

*/
route.get("/bookInfo/:_id", booksControllers.findOneBook);
route.delete("/deleteBook/:_id", booksControllers.deleteBook);

module.exports = route;
