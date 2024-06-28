import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { BookingContext } from "../Context/Bookingprovider";

const Card = () => {
  const [accommodations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const { handleAddToCart } = useContext(BookingContext);

  useEffect(() => {
    const fetchAccommodations = async () => {
      try {
        const response = await axios.get(
          "https://server-airbnb.onrender.com/place/accommodation"
        );
        setAccommodations(response.data.accommodations); // Assuming data structure is directly an array
        setLoading(false); // Update loading state
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Update loading state in case of error
      }
    };

    fetchAccommodations();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Optional: Add a loading indicator
  }

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {accommodations.map((accommodation) => (
          <div
            key={accommodation._id} // Assuming _id is a unique identifier
            className="max-w-sm rounded overflow-hidden shadow-lg m-4 flex flex-col"
          >
            <img className="w-full" src={accommodation.image_url} alt="House" />
            <div className="px-6 py-4 flex-grow">
              <div className="font-bold text-xl mb-2">
                {accommodation.location}
              </div>
              <p className="text-gray-700 text-base">
                Price: ${accommodation.price}
              </p>
              <p className="text-gray-700 text-base">
                Rating: {accommodation.rating}
              </p>
            </div>
            <div className="px-6 py-4">
              <button
                type="button"
                onClick={() => handleAddToCart(accommodation)}
                className="w-full hover:bg-[#ff385c] hover:text-white text-[#ff385c] font-medium py-2 px-4 rounded border bg-white border-[#ff385c] focus:outline-none focus:shadow-outline"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
