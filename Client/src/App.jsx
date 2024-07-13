import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/LoginPage"; // Assuming you have a Login component
import Signup from "./pages/RegisterPage"; // Assuming you have a Signup component
import BookingForm from "./components/BookingForm";
import BookingProvider from "./Context/Bookingprovider"; // Ensure correct path
import SuccessUrl from "./components/Success";
import CancelUrl from "./components/Cancel";

export default function App() {
  return (
    <BookingProvider>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/success" Component={SuccessUrl} />
        <Route path="/confirmbooking" element={<BookingForm />} />
        <Route path="/cancel" Component={CancelUrl} />
      </Routes>
    </BookingProvider>
  );
}
