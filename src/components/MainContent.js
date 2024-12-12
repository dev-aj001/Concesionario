import React from 'react';
import '../styles/MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <h1 className="title">Bienvenido al Concesionario</h1>
      <p className="description">
        Encuentra los mejores carros al mejor precio. Explora nuestro catálogo y descubre tu próximo vehículo.
      </p>
      <button className="button" onClick={() => alert('¡Explorar catálogo!')}>
        Explorar catálogo
      </button>
    </div>
  );
};

export default MainContent;
