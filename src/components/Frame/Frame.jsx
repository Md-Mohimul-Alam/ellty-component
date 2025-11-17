import React, { useState } from 'react';
import './Frame.css';

const Frame = () => {
  const [selectedPages, setSelectedPages] = useState(new Set());
  const [hoveredPage, setHoveredPage] = useState(null);

  const togglePageSelection = (pageNumber) => {
    setSelectedPages(prev => {
      const newSelection = new Set(prev);
      if (newSelection.has(pageNumber)) {
        newSelection.delete(pageNumber);
      } else {
        newSelection.add(pageNumber);
      }
      return newSelection;
    });
  };

  const toggleAllPages = () => {
    if (selectedPages.size === 6) {
      setSelectedPages(new Set());
    } else {
      setSelectedPages(new Set([1, 2, 3, 4, 5, 6]));
    }
  };

  const isAllSelected = selectedPages.size === 6;
  const isSomeSelected = selectedPages.size > 0 && selectedPages.size < 6;

  const handlePageHover = (pageNumber) => {
    setHoveredPage(pageNumber);
  };

  const handlePageLeave = () => {
    setHoveredPage(null);
  };

  const renderCheckbox = (isSelected, isHovered = false, isAll = false) => {
    if (isAll && isSomeSelected) {
      // Indeterminate state for "All pages" when some are selected
      return (
        <div className="checkbox-display state-indeterminate">
          <div className="checkbox-bg blue-main"></div>
          <div className="indeterminate-line"></div>
        </div>
      );
    }

    if (isSelected) {
      return (
        <div className="checkbox-display state-selected">
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
        </div>
      );
    }

    if (isHovered) {
      return (
        <div className="checkbox-display state-hover">
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
        </div>
      );
    }

    // Default unchecked state
    return (
      <div className="checkbox-display state-default">
        <div className="checkbox-bg"></div>
        <div className="checkbox-border default-border"></div>
      </div>
    );
  };

  return (
    <div className="frame-container">
      {/* Header */}
      <div className="frame-header-section">
        <div 
          className={`frame-header-content ${isAllSelected ? 'frame-item-selected' : ''}`}
          onClick={toggleAllPages}
          onMouseEnter={(e) => e.currentTarget.classList.add('frame-item-hover')}
          onMouseLeave={(e) => e.currentTarget.classList.remove('frame-item-hover')}
          style={{ cursor: 'pointer' }}
        >
          <div className="frame-header-text">All pages</div>
          <div className="frame-checkbox-container">
            {renderCheckbox(isAllSelected, false, true)}
          </div>
        </div>
      </div>

      {/* Divider */}
      <svg
        className="frame-divider"
        width="370"
        height="20"
        viewBox="0 0 370 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="15.35"
          y1="9.65"
          x2="354.65"
          y2="9.65"
          stroke="#CDCDCD"
          strokeWidth="0.7"
          strokeLinecap="round"
        />
      </svg>

      {/* Pages List */}
      <div className="frame-pages-container">
        {[...Array(6)].map((_, index) => {
          const pageNumber = index + 1;
          const isSelected = selectedPages.has(pageNumber);
          const isHovered = hoveredPage === pageNumber;
          
          return (
            <div
              key={pageNumber}
              className={`frame-page-item ${isSelected ? 'frame-item-selected' : ''}`}
              style={{ top: `${-1 + index * 42}px` }}
              onClick={() => togglePageSelection(pageNumber)}
              onMouseEnter={() => handlePageHover(pageNumber)}
              onMouseLeave={handlePageLeave}
            >
              <div className="frame-page-text">Page {pageNumber}</div>
              <div className="frame-checkbox-container">
                {renderCheckbox(isSelected, isHovered)}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Divider */}
      <svg
        className="frame-divider"
        width="370"
        height="20"
        viewBox="0 0 370 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="15.35"
          y1="9.65"
          x2="354.65"
          y2="9.65"
          stroke="#CDCDCD"
          strokeWidth="0.7"
          strokeLinecap="round"
        />
      </svg>

      {/* Done Button */}
      <div className="frame-button-container">
        <div 
          className="frame-done-button"
          onClick={() => console.log('Selected pages:', Array.from(selectedPages))}
        >
          <div className="frame-button-text">
            Done {selectedPages.size > 0 ? `(${selectedPages.size} selected)` : ''}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;