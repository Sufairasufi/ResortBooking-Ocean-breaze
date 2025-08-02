import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "./Component/Navbar/Navbar"
import Home from './Component/Home/Home'
import Layout from './Component/Layout'
import About from './Component/About/About'
import Footer from './Component/Footer/Footer'
import Contact from './Component/Contact/Contact'
import Service from './Component/Services/Service'
import Booking from './Component/Booking/Booking'
import Luxury from './Component/BookingCategory/Luxury'
import Cottege from './Component/BookingCategory/Cottege'
import Family from './Component/BookingCategory/Family'
import Gallery from './Component/Gallery/Gallery'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route element={<Layout/>}>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='service' element={<Service/>}/>
        <Route path='booking' element={<Booking/>}/>
        <Route path='luxury' element={<Luxury/>}/>
        <Route path='cottege' element={<Cottege/>}/>
        <Route path='family' element={<Family/>}/>
        <Route path='gallary' element={<Gallery/>}/>
        </Route>
        <Route path='/foot' element={<Footer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
