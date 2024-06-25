const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware/user');
const {
  addPlace,
  getPlaces,
  updatePlace,
  singlePlace,
  userPlaces,
  searchPlaces
} = require('../controllers/placeController');
const {handleGetAccommodation,handlePostAccommodation} = require("../controllers/accommodation.js") 

//Router config
router.route('/').get(getPlaces);

// Protected routes (user must be logged in)
router.route('/add-places').post(isLoggedIn, addPlace);
router.route('/user-places').get(isLoggedIn, userPlaces);
router.route('/update-place').put(isLoggedIn, updatePlace);
router.get("/accommodation",handleGetAccommodation)
router.post("/createAccommodation",handlePostAccommodation);


// Not Protected routed but sequence should not be interfered with above routes
router.route('/:id').get(singlePlace);
router.route('/search/:key').get(searchPlaces)


module.exports = router;