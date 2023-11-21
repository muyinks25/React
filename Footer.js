// Footer.js
import React, { Component } from 'react';
import './App.css'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-content">
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Email: Nanz Fashion @gmail.com</p>
          <p>Phone: +2348056392589</p>
        </div>
      </div>
      <div className="social-media">
        <h3>Connect with Us</h3>
        <ul>
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>
      <div className="copyright">
        <p>&copy; 2023 Nanz Fashion. All rights reserved.</p>
      </div>
      </footer>
    );
  }
}

export default Footer;
