const express = require("express");
const route = express.Router();
const booksControllers = require("../controllers/books");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "../frontend/public/images",
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    callback(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

route.post(
  "/addBookForm",
  upload.single("bookCover"),
  booksControllers.addBook
);

route.get("/", booksControllers.showBooks);
route.get("/bookInfo/:_id", booksControllers.findOneBook);
route.delete("/deleteBook/:_id", booksControllers.deleteBook);
route.put("/updateBook/:_id", upload.none(), booksControllers.updateBook);

module.exports = route;
