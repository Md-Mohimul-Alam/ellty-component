import React from 'react';
import './AllPages.css';

const AllPages = () => {
  const pages = ['Page 1', 'Page 2', 'Page 3', 'Page 4'];

  return (
    <div className="allpages-container">
      <div className="allpages-header">
        <h1>All pages</h1>
      </div>
      
      <div className="allpages-content">
        <div className="pages-list">
          {pages.map((page, index) => (
            <div key={index} className="page-item">
              <span className="page-name">{page}</span>
            </div>
          ))}
        </div>
        
        <div className="done-section">
          <button className="done-btn">Done</button>
        </div>
      </div>
    </div>
  );
};

export default AllPages;