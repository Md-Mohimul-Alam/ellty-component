import React from 'react';
import './AllPages.css';

const AllPages = () => {
  const menuItems = [
    { id: 1, name: "All pages" },
    { id: 2, name: "All pages" },
    { id: 3, name: "All pages" },
    { id: 4, name: "All pages" },
    { id: 5, name: "All pages" },
    { id: 6, name: "All pages" },
    { id: 7, name: "All pages" }
  ];

  const renderCheckbox = (itemId) => {
    switch(itemId) {
      case 1:
        return (
          <div className="checkbox-container">
            <div className="checkbox-bg blue-bg"></div>
            <svg className="check-icon" width="17" height="12" viewBox="0 0 17 12" fill="none">
              <path d="M0 6.6L6.0345 11.9672C6.055 11.9854 6.0863 11.9837 6.1047 11.9635L17 0" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        );
      case 2:
        return (
          <div className="checkbox-container">
            <div className="checkbox-bg white-bg"></div>
            <div className="checkbox-border light-border"></div>
            <svg className="check-icon" width="17" height="12" viewBox="0 0 17 12" fill="none">
              <path d="M0 6.6L6.0345 11.9672C6.055 11.9854 6.0863 11.9837 6.1047 11.9635L17 0" stroke="#E3E3E3" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        );
      case 3:
        return (
          <div className="checkbox-container selected-item">
            <div className="checkbox-bg blue-bg"></div>
            <svg className="check-icon" width="17" height="12" viewBox="0 0 17 12" fill="none">
              <path d="M0 6.6L6.0345 11.9672C6.055 11.9854 6.0863 11.9837 6.1047 11.9635L17 0" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        );
      case 4:
        return (
          <div className="checkbox-container">
            <div className="checkbox-bg white-bg"></div>
            <div className="checkbox-border gray-border"></div>
            <svg className="check-icon" width="17" height="12" viewBox="0 0 17 12" fill="none">
              <path d="M0 6.6L6.0345 11.9672C6.055 11.9854 6.0863 11.9837 6.1047 11.9635L17 0" stroke="#878787" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        );
      default:
        return (
          <div className="checkbox-container">
            <div className="checkbox-bg blue-bg"></div>
            <svg className="check-icon" width="17" height="12" viewBox="0 0 17 12" fill="none">
              <path d="M0 6.6L6.0345 11.9672C6.055 11.9854 6.0863 11.9837 6.1047 11.9635L17 0" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        );
    }
  };

  return (
    <div className="all-pages-wrapper">
      <div className="all-pages-container">
        <div className="all-pages-header">
          <div className="all-pages-title">All pages</div>
          <div className="all-pages-icon">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L8.22857 3.77143L4.45714 7.54286L0 3.42857" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <div className="icon-background">
              <div className="icon-border"></div>
            </div>
          </div>
        </div>

        <div className="menu-items">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-item">
              <div className="menu-text">{item.name}</div>
              {renderCheckbox(item.id)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPages;