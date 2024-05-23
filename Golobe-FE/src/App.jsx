import { Route, Routes } from 'react-router-dom'
import './App.css'
import FlightListing from './components/FlightListing'
import FlightSearch from './components/FlightSearch'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/flight-list' element={<FlightListing/>}/>
        <Route path='/flight-search' element={<FlightSearch/>}/>
      </Routes>
    </>
  )
}

export default App
