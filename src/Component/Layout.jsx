import React from 'react'
import Navbar from './Navbar/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import HomeNavbar from './Home/HomeNavbar'
import Footer from './Footer/Footer'

const Layout = () => {
  const location = useLocation()
  const isHome = location.hash === '#/' || location.pathname === '/'

  return (
    <div>
      {isHome ? <HomeNavbar /> : <Navbar />}
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
