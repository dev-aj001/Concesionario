import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ toggleDropdown }) => {
  return (
    <div className="search-container">
      {/* Buscador a la izquierda */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Buscar por marca, modelo, año, etc..."
          className="search-input"
        />
        <span className="search-icon">🔍</span>
      </div>

      {/* Filtros a la derecha */}
      <div className="filter-options">
        <button className="filter-link" onClick={() => toggleDropdown("marcaModelo")}>
          Marca y modelo <span>⬇️</span>
        </button>
        <button className="filter-link" onClick={() => toggleDropdown("tipo")}>
          Tipo <span>⬇️</span>
        </button>
        <button className="filter-link" onClick={() => toggleDropdown("ubicacion")}>
          Ubicación <span>⬇️</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
