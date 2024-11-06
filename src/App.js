// src/App.js
import React from 'react';
import Header from './components/Header/Header'; // Import Header component
import Sidebar from './components/Sidebar/Sidebar';
import MainBox from './components/MainBox/MainBox';

function App() {
  return (
    <div className="App">
      <Header /> {/* Header placed above the Sidebar and MainBox */}
      <div className="content-container">
        <Sidebar />
        <MainBox />
      </div>
    </div>
  );
}

export default App;
