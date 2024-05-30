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
import FlightDetails from './components/FlightDetails'
import TicketDetails from './components/TicketDetails'
import LoginForm from './components/LoginForm'
import SignUp from './components/SignUp'
import ForgotPassword from './components/ForgotPassword'
import VerifyCode from './components/VerifyCode'
import ResetPassword from './components/ResetPassword'
import PaymentMethod from './components/PaymentMethod'
import HotelDescription from './components/HotelDescription'
import Account from './components/Account'
import AccountHistory from './components/AccountHistory'
import AccountPayment from './components/AccountPayment'
import HotelTicketDetails from './components/HotelTicketDetails'
import StaysAccountHistory from './components/StaysAccountHistory'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/flight-list' element={<FlightListing/>}/>
        <Route path='/flight-search' element={<FlightSearch/>}/>
        <Route path='/flight-details' element={<FlightDetails/>}/>
        <Route path='/booking-details' element={<BookingDetail/>}/>
        <Route path='/hotel-search' element={<HotelSearch/>}/>
        <Route path='/hotel-listing' element={<HotelListing/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/ticket-details' element={<TicketDetails/>}/>
        <Route path='/hotel-ticket-details' element={<HotelTicketDetails/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
        <Route path='/verify' element={<VerifyCode/>}/>
        <Route path='/set-password' element={<ResetPassword/>}/>
        <Route path='/payment' element={<PaymentMethod/>}/>
        <Route path='/Hotel-description' element={<HotelDescription/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/account-history' element={<AccountHistory/>}/>
        <Route path='/stays-account-history' element={<StaysAccountHistory/>}/>
        <Route path='/account-payment' element={<AccountPayment/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
