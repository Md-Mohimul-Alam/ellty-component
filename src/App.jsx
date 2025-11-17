import React, { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import CheckBox from './components/CheckBox/CheckBox';
import Frame from './components/Frame/Frame';
import AllPages from './components/AllPages/AllPages';

function App() {
  const [currentScreen, setCurrentScreen] = useState('button');

  const screens = {
    button: <Button />,
    CheckBox: <CheckBox />,
    frame: <Frame />,
    allpages: <AllPages />
  };

  return (
    <div className="app">
      <div className="screen-container">
        {screens[currentScreen]}
      </div>
      
      <div className="navigation">
        <button 
          className={`nav-btn ${currentScreen === 'button' ? 'active' : ''}`}
          onClick={() => setCurrentScreen('button')}
        >
          Button
        </button>
        <button 
          className={`nav-btn ${currentScreen === 'CheckBox' ? 'active' : ''}`}
          onClick={() => setCurrentScreen('CheckBox')}
        >
          CheckBox
        </button>
        <button 
          className={`nav-btn ${currentScreen === 'allpages' ? 'active' : ''}`}
          onClick={() => setCurrentScreen('allpages')}
        >
          All pages
        </button>
        <button 
          className={`nav-btn ${currentScreen === 'frame' ? 'active' : ''}`}
          onClick={() => setCurrentScreen('frame')}
        >
          Frame A4:5381
        </button>
      </div>
    </div>
  );
}

export default App;