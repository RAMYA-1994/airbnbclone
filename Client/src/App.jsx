import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/LoginPage"; // Assuming you have a Login component
import Signup from "./pages/RegisterPage"; // Assuming you have a Signup component
import BookingForm from "./components/BookingForm";
import BookingProvider from "./Context/Bookingprovider"; // Ensure correct path
<<<<<<< HEAD
import SuccessUrl from "./components/Success";
import CancelUrl from "./components/Cancel";
=======
import ProtectedRouter from "./utils/ProtectedRouter";
>>>>>>> 3124c60cc77aed09d00280a734c8e45ecfb92ab6

export default function App() {
  return (
    <BookingProvider>
      <Routes>
        <Route path="/Login" element={<Login />} />
<<<<<<< HEAD
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/success" Component={SuccessUrl} />
        <Route path="/confirmbooking" element={<BookingForm />} />
        <Route path="/cancel" Component={CancelUrl} />
=======
        <Route element={<ProtectedRouter />}>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/confirmbooking" element={<BookingForm />} />
        </Route>
>>>>>>> 3124c60cc77aed09d00280a734c8e45ecfb92ab6
      </Routes>
    </BookingProvider>
  );
}
