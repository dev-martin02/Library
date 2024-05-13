const express = require("express");
const route = express.Router();
const userControllers = require("../controllers/users");

route.post("/logIn", userControllers.returnUser);

route.post("/signIn", userControllers.addNewUser);

module.exports = route;
