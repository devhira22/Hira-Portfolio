
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="main-footer">

      <div className="footer-top">

        {/* Navigation */}
        <div className="footer-links">
          <h3>Explore</h3>
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
        </div>

        {/* Projects */}
        <div className="footer-links">
          <h3>My Projects</h3>
          <a href="https://pattern-designer.vercel.app/" target="_blank" rel="noopener noreferrer">
           Pattern React.jsx Projects
          </a>
          <a href="https://hoor-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">
            Portfolio Website
          </a>
          <a href="https://punjab-medical-institute-pmi.vercel.app/" target="_blank" rel="noopener noreferrer">
          College React.jsx Projects
          </a>
          <a href="https://share.google/KdOerPWw2eQJ8P7jl" target="_blank" rel="noopener noreferrer">
            Businees Profile
          </a>
         
        </div>

        {/* Contact */}
        <div className="footer-links footer-social">
          <h3>Connect</h3>

          <a
            href="https://www.instagram.com/hoor_developer?dlrf=MXFkdDYwMTlpOG1iZA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://wa.me/923228198628"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>

          <p>Let's work together and create something amazing.</p>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} HIRA PORTFOLIO. All Rights Reserved.
        </p>

        <p>
          Designed & Developed by <span>Hira</span>
        </p>
      </div>

    </footer>
  );
}

export default Footer;
