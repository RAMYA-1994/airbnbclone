import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { BookingContext } from '../Context/Bookingprovider';


const Card = () => {
  const [accommodations, setAccommodations] = useState([]);
  const { handleAddToCart } = useContext(BookingContext);

  useEffect(() => {
    const fetchAccommodations = async () => {
      try {
        const response = await axios.get('http://localhost:8080/place/accommodation');
        setAccommodations(response.data.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAccommodations();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {accommodations.map((accommodation) => (
          <div key={accommodation._id} className="max-w-sm w-full rounded overflow-hidden shadow-lg m-4 flex flex-col">
            <img className="w-full" src={accommodation.image_url} alt="House" />
            <div className="px-6 py-4 flex-grow">
              <div className="font-bold text-xl mb-2">{accommodation.location}</div>
              <p className="text-gray-700 text-base">Price: {accommodation.price}</p>
              <p className="text-gray-700 text-base">Rating: {accommodation.rating}</p>
            </div>
            <div className="px-6 py-4">
              <button
                type="button"
                onClick={() => handleAddToCart(accommodation)}
                className="w-full bg-[#ff385c] text-white py-2 px-4 rounded hover:bg-[#ff385c] focus:outline-none focus:shadow-outline"
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
