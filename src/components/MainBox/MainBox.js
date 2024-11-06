// src/components/MainBox/MainBox.js
import React from 'react';
import './MainBox.css';
import icon1 from './assets/Mentor sessions.svg';
import icon2 from './assets/Learning Materials.svg';
import icon3 from './assets/How it works.svg';
import SubSidebar from './SubSidebar'; 
import PartsList from './PartsList/PartsList'; // Import the new PartsList component

function MainBox() {
  return (
    <div className="main-box">
      <div className="horizontal-container">
        <div className="horizontal-box">
          <a href="#link1" className="main-link">
            <img src={icon1} alt="Icon 1" className="link-icon" />
            Mentor Sessions
          </a>
          <a href="#link2" className="main-link">
            <img src={icon2} alt="Icon 2" className="link-icon" />
            Learning Materials
          </a>
        </div>
        <a href="#newLink" className="new-link">
          <img src={icon3} alt="Icon 3" className="link-icon" />
          How it works
        </a>
      </div>

      {/* Content container for SubSidebar and PartsList */}
      <div className="content-container">
        <SubSidebar /> {/* SubSidebar placed on the left */}
        <PartsList />   {/* PartsList placed on the right of SubSidebar */}
      </div>
    </div>
  );
}

export default MainBox;
