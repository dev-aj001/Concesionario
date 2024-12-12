import React from 'react';
import '../styles/Dropdown.css';

const Dropdown = ({ type, items }) => {
  return (
    <div className={`${type}-dropdown`}>
      {items.map((item, index) => (
        <div key={index} className="dropdown-item">
          {item.brand && (
            <div className="brand-header">
              <img src={item.logo} alt={item.brand} className="brand-logo" />
              <strong>{item.brand}</strong>
            </div>
          )}
          <ul>
            {item.models.map((model, idx) => (
              <li key={idx}>{model}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
