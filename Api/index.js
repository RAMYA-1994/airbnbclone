const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectWithDB = require("./config/db");
require("dotenv").config();
const user = require("./routes/user.js");
const place = require("./routes/place.js");
const index = require("./routes/index.js");
const Booking = require("./routes/booking.js");
const Place = require("./models/Place.js");

// const cookieSession = require("cookie-session");
// const cookieParser = require("cookie-parser");
const cloudinary = require("cloudinary").v2;

// connect with database
connectWithDB();
console.log(process.env.PORT);
// cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();

// For handling cookies

// middleware to handle json
app.use(express.json());

// CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

// use express router
// app.use("/auth", require("./routes"));
app.use("/auth", user);
app.use("/place", place);
app.use("/index", index);
app.use("/booking",Booking)

connectWithDB().then(() => {
  app.listen(process.env.PORT || 5000, (err) => {
    if (err) {
      console.log("Error in connecting to server: ", err);
    }
    console.log(`Server is running on port no. ${process.env.PORT}`);
  });
});

module.exports = app;
