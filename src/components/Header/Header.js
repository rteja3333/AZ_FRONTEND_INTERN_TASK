// src/components/Header/Header.js
import React from 'react';
import './Header.css'; // You can style the header in this file
import menuIcon from './assets/Menu.svg'; // Import the menu icon
import secondIcon from './assets/Ellipse 13.svg'; // Import the second icon
import notificationIcon from './assets/Notification.svg'; // Import the notification icon (replace with your actual path)

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        {/* Menu Icon */}
        <img src={menuIcon} alt="Menu" className="menu-icon" />
        
        {/* "ALGOZENITH" text */}
        <div className="algozenith">
          <span>A</span>
          <span>l</span>
          <span>g</span>
          <span>o</span>
          <span>Z</span>
          <span>e</span>
          <span>n</span>
          <span>i</span>
          <span>t</span>
          <span>h</span>
        </div>
      </div>

      {/* Right side: Blue square with Notification Icon inside it */}
      <div className="header-right">
        <div className="blue-square">
          <img src={notificationIcon} alt="Notification" className="notification-icon" />
        </div>
        <img src={secondIcon} alt="Second Icon" className="second-icon" />
      </div>
    </header>
  );
}

export default Header;
