import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
// import image from"../assets/icon.png"
import {Calendar} from "@nextui-org/calendar";


const BookingPage = () => {
  const [searchParams] = useSearchParams();
  const accommodationId = searchParams.get('productId');
  const checkInDate = searchParams.get('checkin');
  const checkOutDate = searchParams.get('checkout');
  const numberOfGuests = searchParams.get('numberOfGuests');
  const numberOfAdults = searchParams.get('numberOfAdults');
  const numberOfChildren = searchParams.get('numberOfChildren');
  const numberOfInfants = searchParams.get('numberOfInfants');
  const numberOfPets = searchParams.get('numberOfPets');
  const guestCurrency = searchParams.get('guestCurrency');
  const isWorkTrip = searchParams.get('isWorkTrip');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: checkInDate || '',
    checkOut: checkOutDate || '',
    adults: numberOfAdults || 1,
    children: numberOfChildren || 0,
    infants: numberOfInfants || 0,
    pets: numberOfPets || 0,
    workTrip: isWorkTrip === 'true',
    currency: guestCurrency || 'USD'
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the booking submission logic here
    console.log('Booking data:', formData);
    // You can also send the data to your backend here
  };
  const [date, setDate] = useState(new Date());
  const [openModel, setOpenModel] = useState(false);
  return (
    <>
      <section className="min-h-screen bg-white">
        <div className="border-b bg-white pl-4 shadow-sm">
          <img
            src="https://www.logo.wine/a/logo/Airbnb/Airbnb-Logo.wine.svg"
            alt="airbnb"
            className="w-32 cursor-pointer"
          />
        </div>
        <div className="mx-auto my-24 flex w-[60%] gap-12">
          <div className="w-1/2">
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-12 w-12 cursor-pointer rounded-full p-3 font-semibold hover:bg-slate-50"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
              <h1 className="text-2xl font-semibold">Request to book</h1>
            </div>
            <div className="flex flex-col gap-5 p-12">
              <h1 className="text-xl font-medium">Your trip</h1>
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="font-medium">Dates</h1>
                  <p className="font-light">1-6 Jul</p>
                </div>
                <button
                  onClick={() => setOpenModel(!openModel)}
                  className="cursor-pointer font-medium underline"
                >
                  Edit
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="font-medium">Guests</h1>
                  <p className="font-light">2 adults</p>
                </div>
                <p className="cursor-pointer font-medium underline">Edit</p>
              </div>
              <button className="my-4 rounded-lg bg-[#ff385c] py-3 font-semibold uppercase text-white hover:bg-[#FF5580]">
                Reserve
              </button>
            </div>
          </div>
          <div className="w-[440px] rounded-lg p-4 ring-1 ring-slate-200">
            <div className="flex items-start gap-5">
              <img
                src="https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="house"
                className="object-fit h-28 w-32 rounded-lg bg-cover bg-center"
              />
              <div>
                <h1 className="text-md font-semibold">Clouds Inn 12</h1>
                <p className="text-sm font-light">Entire place</p>
                <p className="text-sm font-light">
                  Rating 4.50 out of 5; 2 reviews
                </p>
                <p className="text-sm font-light">
                  4.50 (2 reviews) •Superhost
                </p>
              </div>
            </div>
            <div className="my-4 border-t" />
            <div>
              <h1 className="text-xl font-semibold">Price details</h1>
              <div className="my-3 flex justify-between font-normal">
                <h1>₹7,970 x 5 nights</h1>
                <p>₹39,850</p>
              </div>
              <div className="my-3 flex justify-between font-normal">
                <h1>Service fee</h1>
                <p>₹5,950</p>
              </div>
              <div className="my-3 flex justify-between font-normal">
                <h1>Cleaning fee</h1>
                <p>₹3,850</p>
              </div>
            </div>
            <div className="border-t my-4" />
            <div className="flex justify-between">
              <h1 className="font-semibold">Total (INR)</h1>
              <p className="text-md font-medium">₹52,648.9</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


export default BookingPage;
