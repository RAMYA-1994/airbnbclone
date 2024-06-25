import React from 'react'
import Card from '../components/Card'
import { Header } from '../components/Header'
import SearchBar from '../components/SearchBar'
import Footer from '../components/Footer'
// import Provider from '../Context/Bookingprovider'
import BookingProvider from '../Context/Bookingprovider'


export default function Home() {
  
  return (
    <>
    <BookingProvider>
    <section>
     <div className='flex justify-center items-baseline p-6'>
      <Header />
      <SearchBar/>
     </div>
    <div className='my-12 p-3'>
    <h1 className='font-bold text-2xl ml-12 capitalize my-4'>Choose popular trip</h1>
    <Card/> 
    </div>
    <Footer/>
    </section>
    </BookingProvider>
    </>
  )
}
