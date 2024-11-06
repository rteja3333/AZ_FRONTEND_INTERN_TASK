// src/components/Sidebar/Sidebar.js
import React from 'react';
import './styling/Sidebar.css';
import icon1 from './assets/Dashboard.svg';
import icon2 from './assets/Learn.svg';
import icon3 from './assets/Forum.svg';
import icon4 from './assets/Upskill.svg';
import icon5 from './assets/Contest.svg';
import icon6 from './assets/star-outline.svg';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-links">
        <li><a href="#link1" className="sidebar-link"><img src={icon1} alt="" className="icon" />Dashboard</a></li>
        <li><a href="#link2" className="sidebar-link"><img src={icon2} alt="" className="icon" />Learn</a></li>
        <li><a href="#link3" className="sidebar-link"><img src={icon3} alt="" className="icon" />Forums</a></li>
        <li><a href="#link4" className="sidebar-link"><img src={icon4} alt="" className="icon" />Upskill</a></li>
        <li><a href="#link5" className="sidebar-link"><img src={icon5} alt="" className="icon" />Contest</a></li>
        <li><a href="#link6" className="sidebar-link"><img src={icon6} alt="" className="icon" />Leaderboard</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
