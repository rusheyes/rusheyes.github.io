import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css';
import logoImage from '../images/logo1.png';

const NavigationBar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logoImage} alt="Logo" className="navbar-logo" />
      </div>
      <button className={`nav-toggle ${navOpen ? 'open' : ''}`} onClick={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`nav-links ${navOpen ? 'open' : ''}`} id="navdes">
        <li><a href="/">Home</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
      <div className="user-auth">
        <a href="/login" className="login-button">Log In</a>
        <a href="/signup" className="signup-button">Sign Up</a>
      </div>
    </nav>
  );
}

export default NavigationBar;
