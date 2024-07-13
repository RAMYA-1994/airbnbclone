const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
    default: 'https://console.cloudinary.com/settings/c-6ee8d015e04e4ed0266c65c7e2e397/api-keys'
  }
});


const User = mongoose.model("users", userSchema);

module.exports = User;