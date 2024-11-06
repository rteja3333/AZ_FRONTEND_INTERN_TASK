// src/components/SubSidebar/SubSidebar.js
import React from 'react';
import './SubSidebar.css';

import infoIconA from './assets/Clock_in_SubSidebar.svg'; // Replace with actual icon paths
import infoIconB from './assets/Clock_in_SubSidebar.svg';
import infoIconC from './assets/Clock_in_SubSidebar.svg';
import infoIconD from './assets/Clock_in_SubSidebar.svg'; // Replace with actual path for Link D
import infoIconE from './assets/Clock_in_SubSidebar.svg'; // Replace with actual path for Link E

function SubSidebar() {
  return (
    <div className="sub-sidebar">
      <ul className="sub-sidebar-links">
        <li>
          <a href="#linkA" className="sub-sidebar-link">
            <span className="link-text">Chapter 1</span>
            <span className="hover-text">
              <img src={infoIconA} alt="Info Icon A" className="info-icon" />
              5:00:00
            </span>
          </a>
          <div className="divider" />
        </li>
        <li>
          <a href="#linkB" className="sub-sidebar-link">
            <span className="link-text">Chapter 2</span>
            <span className="hover-text">
              <img src={infoIconB} alt="Info Icon B" className="info-icon" />
              5:00:00
            </span>
          </a>
          <div className="divider" />
        </li>
        <li>
          <a href="#linkC" className="sub-sidebar-link">
            <span className="link-text">Chapter 3</span>
            <span className="hover-text">
              <img src={infoIconC} alt="Info Icon C" className="info-icon" />
              5:00:00
            </span>
          </a>
          <div className="divider" />
        </li>
        <li>
          <a href="#linkD" className="sub-sidebar-link">
            <span className="link-text">Chapter 4</span>
            <span className="hover-text">
              <img src={infoIconD} alt="Info Icon D" className="info-icon" />
              5:00:00
            </span>
          </a>
          <div className="divider" />
        </li>
        <li>
          <a href="#linkE" className="sub-sidebar-link">
            <span className="link-text">Chapter 5</span>
            <span className="hover-text">
              <img src={infoIconE} alt="Info Icon E" className="info-icon" />
              5:00:00
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SubSidebar;
