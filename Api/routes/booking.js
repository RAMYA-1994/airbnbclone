const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middleware/user.js");
const handleCheckoutPayment = require("../controllers/payment.js")

router.post("/create-checkout-session",handleCheckoutPayment);

module.exports = router;
