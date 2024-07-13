import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { BookingContext } from "../Context/Bookingprovider";

const ProtectedRouter = () => {
  const { isLoggedIn } = useContext(BookingContext);
  console.log(isLoggedIn);
  const user = isLoggedIn;
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRouter;
