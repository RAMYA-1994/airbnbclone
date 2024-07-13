import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const BookingContext = createContext();

function BookingProvider({ children }) {
  const [bookCart, setBookCart] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    setBookCart(item);
    console.log(item);
    if (bookCart) {
      return navigate("/confirmbooking");
    }
  };

  return (
    <>
      <BookingContext.Provider
        value={{
          bookCart,
          handleAddToCart,
          setBookCart,
          isLoggedIn,
          setIsLoggedIn,
        }}
      >
        {children}
      </BookingContext.Provider>
    </>
  );
}

export default BookingProvider;
