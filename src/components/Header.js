import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="nav-container">
        <div className="logo">
          <h1>TECAR</h1>
        </div>
        <nav className="nav">
          <a href="#!" className="nav-link">Compra un auto</a>
          <a href="#!" className="nav-link">Vende tu auto</a>
          <a href="../pages/Nosotros.js" className="nav-link">Nosotros</a>
          <a href="#!" className="nav-link">
            <FontAwesomeIcon icon={faUserCircle} className="user-icon" />
            Ingresar
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
