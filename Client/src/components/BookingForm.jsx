import { useContext } from "react";
import { BookingContext } from "../Context/Bookingprovider";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const BookingPage = () => {
  const { bookCart } = useContext(BookingContext);
  const navigate = useNavigate();

  const handleMakePayment = async () => {
    try {
      // Load Stripe
      const stripe = await loadStripe(
        "pk_test_51PSZdTEc38CqNOrJpWSRQsgdLvyQ9kHaByFwkhs7fIzXG2cd1G5itB3SgUzq8eaN7iUrrWn6f8w3n5grRAOXGfNi00Ph4VhOLB"
      );

      // Prepare data for Stripe Checkout
      const response = await axios.post(
        "https://server-airbnb.onrender.com/booking/create-checkout-session",
        JSON.stringify(bookCart), // Send bookCart as JSON string
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      const sessionId = response.data.sessionId;

      // Redirect to Checkout
      const result = await stripe.redirectToCheckout({ sessionId });
      if (result.error) {
        toast.error("Payment can't start");
      }
    } catch (error) {
      console.error("Error in handleMakePayment:", error);
      toast.error("Payment failed");
    }
  };

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
                onClick={() => navigate(-1)}
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
                <button className="cursor-pointer font-medium underline">
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
              <button
                className="my-4 rounded-lg bg-[#ff385c] py-3 font-semibold uppercase text-white hover:bg-[#FF5580]"
                onClick={handleMakePayment}
              >
                Reserve
              </button>
            </div>
          </div>
          <div className="w-[440px] rounded-lg p-4 ring-1 ring-slate-200">
            <div className="flex items-start gap-5">
              <img
                src={bookCart?.image_url}
                alt="house"
                className="object-fit h-28 w-32 rounded-lg bg-cover bg-center"
              />
              <div>
                <h1 className="text-md font-semibold">{bookCart?.location}</h1>
                <div className="flex space-x-2 items-center">
                  <p className="text-sm font-light my-1">{bookCart?.rating}</p>
                  {[1, 2, 3, 4].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4 text-orange-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                  <p className="text-sm font-light">52 (reviews) •Superhost</p>
                </div>
              </div>
            </div>
            <div className="my-4 border-t" />
            <div>
              <h1 className="text-xl font-semibold">Price details</h1>
              <div className="my-3 flex justify-between font-normal">
                <h1>{bookCart?.price} x 5 nights</h1>
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
      <ToastContainer />
    </>
  );
};

export default BookingPage;
