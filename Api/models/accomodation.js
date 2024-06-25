const mongoose = require('mongoose');

// Define the schema for the house listing
const houseSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true,
        trim: true
    },
    image_url: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: function(v) {
                return /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/.test(v);
            },
            message: props => `${props.value} is not a valid URL!`
        }
    },
    price: {
        type: String,
        required: true,
        trim: true,
        match: /^[0-9]+\/Day$/
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    }
});

// Create the model from the schema
const House = mongoose.model('accommodations', houseSchema);

// Export the model
module.exports = House;
