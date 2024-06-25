const House = require("../models/accomodation.js")

const handleGetAccommodation= async(req,res)=>{
    try {
        const accommodations = await House.find();

        if (accommodations.length === 0) {
            return res.status(401).send({
                success: false,
                message: 'No accommodations found'
            });
        }

        return res.status(200).send({
            success: true,
            message: 'Accommodations successfully retrieved',
            data: accommodations
        });
    
    }catch(error){
        console.log(error)
    }
}
   
// Define the POST endpoint to create a new house listing
const handlePostAccommodation = async (req, res) => {
    try {
        const { location, image_url, price, rating } = req.body;

        // Create a new house instance
        const newHouse = new House({
            location,
            image_url,
            price,
            rating
        });

        // Save the new house listing to the database
        await newHouse.save();

        return res.status(201).send({
            success: true,
            message: 'Accommodation successfully created',
            data: newHouse
        });
    } catch (err) {
        return res.status(400).send({
            success: false,
            message: 'Error creating accommodation',
            error: err.message
        });
    }
}

module.exports = {handleGetAccommodation,handlePostAccommodation};