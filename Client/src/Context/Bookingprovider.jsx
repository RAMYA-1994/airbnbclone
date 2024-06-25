import { createContext ,useState} from 'react';
import { useNavigate } from 'react-router-dom';
export const BookingContext = createContext();


function BookingProvider({children}) {
    const [bookCart,setBookCart] = useState(null);
    const navigate = useNavigate()

    const handleAddToCart = (item)=>{
    setBookCart(item);  
    console.log(item);
    if(bookCart){
      return navigate("/confirmbooking")
    }}
    
    const hanldeBooking = ()=>{
      return null
    }

  return (
    <>
     <BookingContext.Provider value={{handleAddToCart,setBookCart,hanldeBooking}}>
        {children}
     </BookingContext.Provider>
    </>
  )
}

export default BookingProvider;