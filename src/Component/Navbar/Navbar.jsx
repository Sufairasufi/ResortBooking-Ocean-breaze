import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
         
        <div className='navbar'>
        <div className='navbar-logo'>
          <img src='Image/logo.png' alt="image"></img>
        </div>
        <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" className="navlink" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/about" className="navlink" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="/service" className="navlink" onClick={() => setIsOpen(false)}>Services</Link></li>
        <li><Link to="/gallary" className="navlink" onClick={() => setIsOpen(false)}>Gallery</Link></li>
        <li><Link to="/contact" className="navlink" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
      </ul>
        
    </div>

    
  )
}

export default Navbar