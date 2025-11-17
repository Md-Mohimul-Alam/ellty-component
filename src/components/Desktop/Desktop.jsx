import React from 'react';
import './Desktop.css';

const Desktop = () => {
  return (
    <div className="desktop-container">
      <div className="desktop-header">
        <h1>All pages</h1>
      </div>
      
      <div className="desktop-grid">
        {[...Array(7)].map((_, index) => (
          <div key={index} className="desktop-card">
            <div className="card-content">
              <span className="card-text">All pages</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Desktop;