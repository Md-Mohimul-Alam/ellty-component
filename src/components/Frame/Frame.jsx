import React from 'react';
import './Frame.css';

const Frame = () => {
  return (
    <div className="frame-container">
      <div className="frame-header">
        <h1>All pages</h1>
      </div>
      
      <div className="frame-grid">
        {[...Array(7)].map((_, index) => (
          <div key={index} className="frame-card">
            <div className="frame-card-content">
              <span className="frame-card-text">All pages</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frame;