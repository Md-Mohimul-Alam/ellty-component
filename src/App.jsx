import React, { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Desktop from './components/Desktop/Desktop';
import FrameA45381 from './components/Frame/Frame';
import AllPages from './components/AllPages/AllPages';

function App() {
  const [currentScreen, setCurrentScreen] = useState('button');

  const screens = {
    button: <Button />,
    desktop: <Desktop />,
    frame: <FrameA45381 />,
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
          className={`nav-btn ${currentScreen === 'desktop' ? 'active' : ''}`}
          onClick={() => setCurrentScreen('desktop')}
        >
          Desktop
        </button>
        <button 
          className={`nav-btn ${currentScreen === 'frame' ? 'active' : ''}`}
          onClick={() => setCurrentScreen('frame')}
        >
          Frame A4:5381
        </button>
        <button 
          className={`nav-btn ${currentScreen === 'allpages' ? 'active' : ''}`}
          onClick={() => setCurrentScreen('allpages')}
        >
          All pages
        </button>
      </div>
    </div>
  );
}

export default App;