const express = require("express");
const route = express.Router();
const booksControllers = require("../controllers/books");
const multer = require("multer");

// Make the addBookForm use the Multer middleware, each books should contains a coverPicture

const storage = multer.diskStorage({
  destination: "./BooksPictures",
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9); //optional makes a unique name
    callback(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

route.post("/bookImage", upload.single("bookCover"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.send("bOOKS WAS A SUCCESS");
});

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
