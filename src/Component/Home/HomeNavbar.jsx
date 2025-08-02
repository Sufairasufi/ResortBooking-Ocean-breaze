import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const HomeNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='home-navbar'>
        <div className='home-navbar-logo'>
          <img src="Image/logo.png"alt="home-image"></img>
        </div>
        <button className='toggle-button-home' onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
        <ul className={`home-navbar-links ${isOpen ? 'open':''}`}>
            <li><Link to="/" className='home-navlink' onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="About" className='home-navlink' onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to="service" className='home-navlink' onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link to="gallary" className='home-navlink' onClick={() => setIsOpen(false)}>Gallary</Link></li>
            <li><Link to="contact" className='home-navlink' onClick={() => setIsOpen(false)}>Contact Us</Link></li>
        </ul>
        
    </div>

  )
}

export default HomeNavbar