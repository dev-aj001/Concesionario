import '../styles/Nosotros.css';
import React from 'react';
import Header from '../components/Header';

const Nosotros = () => {
  return (
    <div className="nosotros-container">
      {/* Encabezado */}
      <Header />
      <header className="nosotros-header">
        <h1>Sobre Nosotros</h1>
        <p>Conoce nuestra historia, misión y compromiso contigo.</p>
      </header>

      {/* Contenido principal */}
      <main className="nosotros-main">
        {/* Sección: Historia */}
        <section className="nosotros-section">
          <h2>Nuestra Historia</h2>
          <p>
            TECAR nació con el objetivo de transformar la forma en que las personas compran y venden autos. 
            Desde nuestros inicios, hemos trabajado para ofrecer vehículos de alta calidad a precios competitivos, 
            siempre priorizando la satisfacción de nuestros clientes.
          </p>
        </section>

        {/* Sección: Misión y Visión */}
        <section className="nosotros-section">
          <h2>Misión</h2>
          <p>
            Brindar un servicio excepcional que facilite la compra y venta de vehículos, 
            proporcionando confianza y transparencia en cada transacción.
          </p>
          <h2>Visión</h2>
          <p>
            Convertirnos en el concesionario líder en el mercado, reconocido por nuestra innovación, 
            excelencia en el servicio y compromiso con la sostenibilidad.
          </p>
        </section>

        {/* Sección: Valores */}
        <section className="nosotros-section">
          <h2>Valores</h2>
          <ul>
            <li><strong>Integridad:</strong> Actuamos con transparencia y ética en todo lo que hacemos.</li>
            <li><strong>Calidad:</strong> Nos aseguramos de que cada vehículo cumpla con los más altos estándares.</li>
            <li><strong>Innovación:</strong> Implementamos tecnologías para ofrecer la mejor experiencia.</li>
            <li><strong>Sostenibilidad:</strong> Comprometidos con prácticas que cuidan el medio ambiente.</li>
            <li><strong>Orientación al cliente:</strong> Tu satisfacción es nuestra prioridad.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Nosotros;
