import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css';

const NavigationBar3 = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/db2');
  };

  const handleUserProfileClick = () => {
    navigate('/profile');
  };

  return (
    <nav className="navbar">
      <div>
        <ul className="nav-links" id="navdes3">
          <li><a href="/db2" onClick={handleHomeClick}>Home</a></li>
          <li><a href="/profile" onClick={handleUserProfileClick}>User's Profile</a></li>
        </ul>
      </div>
      <div className="user-auth">
        <a href="/login" className="signup-button">Log Out</a>
      </div>
    </nav>
  );
}

export default NavigationBar3;

