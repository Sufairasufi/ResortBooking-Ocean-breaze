import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-top'>
        <div className='footer-logo'>
          <img src='Image/logo.png' alt='Ocean Breeze Logo' />
        </div>

          <ul className='footer-link'>
            <li><Link to="/" className='foot'>Home</Link></li>
            <li><Link to="/about" className='foot'>About</Link></li>
            <li><Link to="/service" className='foot'>Services</Link></li>
            <li><Link to="/gallery" className='foot'>Gallery</Link></li>
            <li><Link to="/contact" className='foot'>Contact Us</Link></li>
          </ul>
          <div className='footer-contact'>
          <h4>Stay In Touch</h4>
           <p> 123 Paradise Road, Beach City, Goa, India</p>
            <a href="#">+91 98765 43210</a><br />
            <a href="#">info@oceanbreeze.com</a>
        </div>
        </div>
        <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
      </div>

      <div className='footer-bottom'>
        <p>© 2025 Ocean Breeze | All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer