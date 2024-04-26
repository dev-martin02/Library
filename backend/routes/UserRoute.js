const express = require("express");
const route = express.Router();
const userControllers = require("../controllers/users");

route.get("/signIn", (req, res) => {
  res.json({ message: "Hello" });
});
route.post("/signIn", userControllers.addNewUser);

module.exports = route;
