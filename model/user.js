// Import the Mongoose library
const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

// Create a Mongoose model for users
const User = mongoose.model("User", userSchema);

// Export the User model
module.exports = User;
