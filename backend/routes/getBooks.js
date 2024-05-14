const express = require("express");
const route = express.Router();
const booksControllers = require("../controllers/books");
const multer = require("multer");

// each books required to contains a coverPicture

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

// eXAMPLE
route.post("/bookImage", upload.single("bookCover"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.send("bOOKS WAS A SUCCESS");
});

route.get("/", booksControllers.showBooks);

/* 
Try another way to implement the routers something like this
route('/bookInfo')
.get("/_id")
.delete("/_id")
*/
route.get("/bookInfo/:_id", booksControllers.findOneBook);
route.delete("/deleteBook/:_id", booksControllers.deleteBook);

module.exports = route;
