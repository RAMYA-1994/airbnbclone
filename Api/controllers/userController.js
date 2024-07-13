const User = require("../models/User");
const bcrypt = require("bcrypt");
const cloudinary = require("cloudinary").v2;

// Register/SignUp user
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, email, and password are required",
      });
    }

    // check if user is already registered
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        message: "User already registered!",
      });
    }

    const isPasswordCorrect = await bcrypt.hash(password, 10);

    if (isPasswordCorrect) {
      // to save new user
      user = await User.create({
        name,
        email,
        password,
      });

      res.status(200).json({
        message: "Register successful",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
      error: err.message,
    });
  }
};

// Login/SignIn user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check for presence of email and password
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required!",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User does not exist!",
      });
    }

    // Match the password
    const isPasswordCorrect = bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Invalid credentials!",
      });
    }

    // Response
    res.status(200).json({
      message: "Login successful",
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
      error: err.message,
    });
  }
};

// Upload picture
exports.uploadPicture = async (req, res) => {
  const { path } = req.file;
  try {
    const result = await cloudinary.uploader.upload(path, {
      folder: "Airbnb/Users",
    });
    res.status(200).json({ url: result.secure_url });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "Internal server error",
    });
  }
};

// Update user
exports.updateUserDetails = async (req, res) => {
  try {
    const { name, password, email, picture } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // user can update only name, only password, only profile pic, or all three
    if (name) user.name = name;
    if (password) user.password = password;
    if (picture) user.picture = picture;

    const updatedUser = await user.save();
    // cookieToken(updatedUser, res);
    res.status(200).json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Logout
exports.logout = async (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
    secure: true, // Only send over HTTPS
    sameSite: "none", // Allow cross-origin requests
  });
  res.status(200).json({
    success: true,
    message: "Logged out",
  });
};
