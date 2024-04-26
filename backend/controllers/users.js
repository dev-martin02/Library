const UserModel = require("../model/UserModel");

exports.addNewUser = async (req, res) => {
  try {
    const newUser = req.body;
    const user = new UserModel(newUser);
    await user.save();
    console.log("User added successfully");
    res.status(201).json({ message: "New user added successfully" });
  } catch (err) {
    console.error("Error adding user:", err.message);
    res.status(500).json({ error: err.message });
  }
};
