import React from 'react';
import './Button.css';

const Button = () => {
  return (
    <div className="button-container">
      <div className="button-content">
        <button className="done-button">Done</button>
        <button className="done-button">Done</button>
        <button className="done-button">Done</button>
      </div>
    </div>
  );
};

export default Button;