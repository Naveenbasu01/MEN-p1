const User = require("../model/userModel");

// Get all users

exports.fetchUsers = async (req, res) => {
  const users = await User.UserCredentials.find();
  if (users.length === 0) {
    return res.status(404).json({ message: "No User Found" });
  }
  res.status(200).json({ message: "All User data", data: users });
};

//  Create new user
exports.createUser = async (req, res) => {
  try {
    const userData = new User.UserCredentials(req.body);
    const { userName } = userData;
    const userExist = await User.UserCredentials.findOne({ userName });
    if (userExist) {
      return res.status(400).json({ error: " username already exist" });
    }
    const savedUser = await userData.save();
    res
      .status(200)
      .json({ message: "user saved successfully", data: savedUser });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

//  Update user by _Id

exports.updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.UserCredentials.findOne({ _id: id });
    if (!userExist) {
      return res.status(404).json({ error: " user not found" });
    }
    const updateData = await User.UserCredentials.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    res
      .status(201)
      .json({ message: "user updated successfully", data: updateData });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// delete user by Id

exports.deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.UserCredentials.findOne({ _id: id });
    if (!userExist) {
      return res.status(404).json({ error: "user not found" });
    }
    await User.UserCredentials.findByIdAndDelete(id);
    res.status(201).json({ message: "User Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
