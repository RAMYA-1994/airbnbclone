const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware/user.js');
// const{handlePostPayment}=require('../controllers/payment.js')

// const {
//   createBookings,
//   getBookings,
// } = require('../controllers/bookingController');

// router.post("/create-checkout-session",handlePostPayment);

module.exports = router;