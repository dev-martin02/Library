const UserModel = require("../model/UserModel");

exports.addNewUser = async (req, res) => {
  try {
    const newUser = req.body;
    const existingUser = await UserModel.findOne({ email: req.body.email });
    if (existingUser) {
      throw new Error("Email already in use!!");
    }

    const user = new UserModel(newUser);
    await user.save();
    console.log("User added successfully");
    res.status(201).json({ message: "New user added successfully" });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

exports.returnUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await UserModel.find({ email: email });

    if (findUser.length === 0) {
      res.status(404).json({ message: "Sorry we couldn't find this User" });
      throw new Error("User not found");
    } else if (!password) {
      res.json({ message: "Password is required" });
      throw new Error("Password is missing");
    } else if (findUser[0].password !== password) {
      res.json({ message: "Email or Password doesn't match" });
      throw new Error("Wrong credentials");
    }
    return res.json({ response: findUser });
  } catch (error) {
    console.log(error.message);
  }
};
