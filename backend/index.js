// Dependencies
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const getBooks = require("./routes/getBooks");

app.use(getBooks);

// DataBase Connection
mongoose
  .connect(process.env.SecretKey)
  .then(() => {
    console.log("dataBase is running");
    app.listen(2000, () => console.log("server is running"));
  })
  .catch(() => console.log("fail"));

/*
  Understand your code, add authentication

  Read this article(basic authentication) -> https://www.loginradius.com/blog/engineering/guest-post/nodejs-authentication-guide/

  Add a log in/sign in Page where the user account can be store in the database
  Fix the structure of your code, review and delete unnecessary code
*/
