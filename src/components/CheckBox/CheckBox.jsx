import React from 'react';
import './CheckBox.css';

const CheckBox = () => {
  const checkboxStates = [
    {
      name: 'Default Unchecked',
      type: 'default-unchecked'
    },
    {
      name: 'Hover Unchecked',
      type: 'hover-unchecked'
    },
    {
      name: 'Selected Gray Check',
      type: 'selected-gray'
    },
    {
      name: 'Hover Blue Press',
      type: 'hover-blue-press'
    },
    {
      name: 'Selected Blue',
      type: 'selected-blue'
    },
    {
      name: 'Hover Blue Press (Duplicate)',
      type: 'hover-blue-press-duplicate'
    },
    {
      name: 'Selected with Overlay',
      type: 'selected-with-overlay'
    },
    {
      name: 'Hover Unchecked (Duplicate)',
      type: 'hover-unchecked-duplicate'
    },
    {
      name: 'Default Unchecked (Duplicate)',
      type: 'default-unchecked-duplicate'
    }
  ];

  return (
    <div className="desktop-container">
      <div className="desktop-header">
        <div className="header-text">Checkbox States</div>
      </div>
      
      <div className="checkbox-list">
        {checkboxStates.map((state, index) => (
          <div key={index} className="checkbox-item">
            {/* Removed the checkbox-label div */}
            <div className={`checkbox-display state-${state.type}`}>
              {renderCheckbox(state.type)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const renderCheckbox = (state) => {
  switch (state) {
    case 'default-unchecked':
      return (
        <>
          <div className="checkbox-bg"></div>
          <div className="checkbox-border default-border"></div>
        </>
      );

    case 'hover-unchecked':
      return (
        <>
          <div className="checkbox-bg"></div>
          <div className="checkbox-border gray-border"></div>
          <svg
            className="check-icon gray-light"
            width="17"
            height="12"
            viewBox="0 0 17 12"
            fill="none"
          >
            <path
              d="M0 6.6L6.0345 11.9672C6.055 11.9854 6.0863 11.9837 6.1047 11.9635L17 0"
              stroke="#E3E3E3"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </>
      );

    case 'selected-gray':
      return (
        <>
          <div className="blue-overlay opacity-10"></div>
          <div className="checkbox-bg"></div>
          <div className="checkbox-border gray-border"></div>
          <svg
            className="check-icon gray-dark"
            width="17"
            height="12"
            viewBox="0 0 17 12"
            fill="none"
          >
            <path
              d="M0 6.6L6.0345 11.9672C6.055 11.9854 6.0863 11.9837 6.1047 11.9635L17 0"
              stroke="#878787"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </>
      );

    case 'hover-blue-press':
      return (
        <>
          <div className="checkbox-bg blue-press"></div>
          <svg
            className="check-icon white"
            width="17"
            height="12"
            viewBox="0 0 17 12"
            fill="none"
          >
            <path
              d="M0 6.6L6.0345 11.9672C6.055 11.9854 6.0863 11.9837 6.1047 11.9635L17 0"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </>
      );

    case 'selected-blue':
      return (
        <>
          <div className="checkbox-bg blue-main"></div>
          <svg
            className="check-icon white"
            width="17"
            height="12"
            viewBox="0 0 17 12"
            fill="none"
          >
            <path
              d="M0 6.6L6.0345 11.9672C6.055 11.9854 6.0863 11.9837 6.1047 11.9635L17 0"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </>
      );

    case 'hover-blue-press-duplicate':
      return (
        <>
          <div className="checkbox-bg blue-press"></div>
          <svg
            className="check-icon white"
            width="17"
            height="12"
            viewBox="0 0 17 12"
            fill="none"
          >
            <path
              d="M0 6.6L6.0345 11.9672C6.055 11.9854 6.0863 11.9837 6.1047 11.9635L17 0"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </>
      );

    case 'selected-with-overlay':
      return (
        <>
          <div className="blue-overlay-full opacity-10"></div>
          <div className="checkbox-bg blue-main"></div>
          <svg
            className="check-icon white"
            width="17"
            height="12"
            viewBox="0 0 17 12"
            fill="none"
          >
            <path
              d="M0 6.6L6.0345 11.9672C6.055 11.9854 6.0863 11.9837 6.1047 11.9635L17 0"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </>
      );

    case 'hover-unchecked-duplicate':
      return (
        <>
          <div className="checkbox-bg"></div>
          <div className="checkbox-border gray-border"></div>
          <svg
            className="check-icon gray-light"
            width="17"
            height="12"
            viewBox="0 0 17 12"
            fill="none"
          >
            <path
              d="M0 6.6L6.0345 11.9672C6.055 11.9854 6.0863 11.9837 6.1047 11.9635L17 0"
              stroke="#E3E3E3"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </>
      );

    case 'default-unchecked-duplicate':
      return (
        <>
          <div className="checkbox-bg"></div>
          <div className="checkbox-border default-border"></div>
        </>
      );

    default:
      return null;
  }
};

export default CheckBox;