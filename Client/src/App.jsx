import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import BookingForm from './components/BookingForm'
import {Avatar} from "@nextui-org/react";


export default function App() {
  return (
    <>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/Login' Component={''}/>
      <Route path='/Signup' Component={''}/>
      <Route path='/confirmbooking' Component={BookingForm}/>
    </Routes>
    </>
  )
}
