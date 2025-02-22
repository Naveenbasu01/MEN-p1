const mongoose = require("mongoose");

// createSchema

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: Number,
    required: true,
  },
});

exports.UserCredentials = mongoose.model("Credential", userSchema);
