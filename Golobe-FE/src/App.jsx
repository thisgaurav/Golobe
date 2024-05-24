import { Route, Routes } from 'react-router-dom'
import './App.css'
import FlightListing from './components/FlightListing'
import FlightSearch from './components/FlightSearch'
import Home from './components/Home'
import Footer from './components/Footer'
import BookingDetail from './components/BookingDetail'
import HotelSearch from './components/HotelSearch'
import HotelListing from './components/HotelListing'
import Favorites from './components/Favorites'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/flight-list' element={<FlightListing/>}/>
        <Route path='/flight-search' element={<FlightSearch/>}/>
        <Route path='/booking-details' element={<BookingDetail/>}/>
        <Route path='/hotel-search' element={<HotelSearch/>}/>
        <Route path='/hotel-listing' element={<HotelListing/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
