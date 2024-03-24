const express = require("express");
const app = express();
const { default: mongoose } = require("mongoose");

app.set("view engine", "pug");

app.get("/bookForm", (req, res) => {
  res.render("bookForm");
});

// DataBase Connection
mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    console.log("dataBase is running");
    app.listen(2000, () => console.log("server is running"));
  })
  .catch(() => console.log("fail"));
