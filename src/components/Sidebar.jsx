import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faExclamation } from '@fortawesome/free-solid-svg-icons';
import Image from '../images/profile.jpg';
import '../styles/dashboard.css';

const Sidebar = () => {
  const [mailClicked, setMailClicked] = useState(false);
  const [alertClicked, setAlertClicked] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isMailboxPage = location.pathname === '/mailbox';

  const taxpayer = {
    name: 'John Doe',
    tin: '123-456-789',
    tradeName: 'JD Enterprises',
    isOnline: true,
    hasMail: true,
    hasAlert: true,
  };

  const handleMailClick = () => {
    setMailClicked(true);
    navigate('/mailbox');
  };

  const handleAlertClick = () => {
    setAlertClicked(true);
  };

  useEffect(() => {
    if (location.pathname !== '/mailbox') {
      setMailClicked(false);
    }
  }, [location.pathname]);

  return (
    <div className="sidebar">
      <div className="profile-card">
        <img className="profile-picture" src={Image} alt="Profile" />
        <div className={`status ${taxpayer.isOnline ? 'online' : 'offline'}`}>
          {taxpayer.isOnline ? 'Online' : 'Offline'}
        </div>
        <div className="info">
          <div className="name">{taxpayer.name}</div>
          <div className="tin">{`TIN: ${taxpayer.tin}`}</div>
          <div className="trade-name">{taxpayer.tradeName}</div>
        </div>
        <div className="icon-wrapper">
          {taxpayer.hasMail && (
            <a href="/mailbox" onClick={handleMailClick}>
              <FontAwesomeIcon
                icon={faEnvelope}
                className={`mail-icon ${isMailboxPage || mailClicked ? 'mail-clicked' : ''}`}
              />
            </a>
          )}
          {taxpayer.hasAlert && (
            <FontAwesomeIcon
              icon={faExclamation}
              className={`alert-icon ${alertClicked ? 'alert-clicked' : ''}`}
              onClick={handleAlertClick}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
