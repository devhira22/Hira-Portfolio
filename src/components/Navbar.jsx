

import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Stylish Logo */}
        <a href="#home" className="nav-logo">
          <div className="logo-box">H</div>
          <div className="logo-text">
            <h2>HIRA</h2>
            <small>PORTFOLIO</small>
          </div>
        </a>

        {/* WhatsApp Link */}
        <a
          href="https://wa.me/923228198628"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link"
        >
          Contact
        </a>

      </div>
    </nav>
  )
}

export default Navbar
