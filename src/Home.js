import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

const Home = () => {
    const [activeDropdown, setActiveDropdown] = useState(null); // Controla qué dropdown está abierto

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown); // Cierra si está abierto o abre el nuevo
    };

    return (
        <div className="container">
            <div className="overlay"></div>
            <div className="content">
                {/* Barra de navegación */}
                <header className="header">
                    <div className="nav-container">
                        <div className="logo">
                            <h1>TECAR</h1>
                        </div>
                        <nav className="nav">
                            <a href="#!" className="nav-link">Compra un auto</a>
                            <a href="#!" className="nav-link">Vende tu auto</a>
                            <a href="#!" className="nav-link">Nosotros</a>
                            <a href="#!" className="nav-link">
                                <FontAwesomeIcon icon={faUserCircle} className="user-icon" />
                                Ingresar
                            </a>
                        </nav>
                    </div>
                </header>

                {/* Barra de búsqueda */}
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

                {/* Dropdowns */}
                {activeDropdown === "marcaModelo" && (
                    <div className="dropdown">
                        <div className="dropdown-item">
                            <div className="brand-header">
                                <img src="/logos/bmw-logo.png" alt="BMW" className="brand-logo" />
                                <strong>Bmw</strong>
                            </div>
                            <ul>
                                <li>X6</li>
                                <li>X5</li>
                                <li>Serie 3</li>
                                <li>I3</li>
                            </ul>
                        </div>
                        <div className="dropdown-item">
                            <div className="brand-header">
                                <img src="/logos/mercedes-logo.jpg" alt="Mercedes" className="brand-logo" />
                                <strong>Mercedes Benz</strong>
                            </div>
                            <ul>
                                <li>Clase Gle</li>
                                <li>Clase A</li>
                                <li>Clase C</li>
                                <li>Clase E</li>
                            </ul>
                        </div>
                        <div className="dropdown-item">
                            <div className="brand-header">
                                <img src="/logos/vw-logo.jpg" alt="Volkswagen" className="brand-logo" />
                                <strong>Volkswagen</strong>
                            </div>
                            <ul>
                                <li>Vento</li>
                                <li>Beetle</li>
                                <li>Tiguan</li>
                                <li>Virtus</li>
                            </ul>
                        </div>
                    </div>
                )}

                {activeDropdown === "tipo" && (
                    <div className="type-dropdown">
                        <ul>
                            <li>
                                <img src="/logos/camioneta-icon.jpg" alt="Camioneta" className="type-icon" />
                                Camioneta
                            </li>
                            <li>
                                <img src="/logos/hatchback-icon.jpg" alt="Hatchback" className="type-icon" />
                                Hatchback
                            </li>
                            <li>
                                <img src="/logos/suv-icon.jpg" alt="SUV" className="type-icon" />
                                SUV
                            </li>
                            <li>
                                <img src="/logos/sedan-icon.jpg" alt="Sedán" className="type-icon" />
                                Sedán
                            </li>
                            <li>
                                <img src="/logos/coupe-icon.jpg" alt="Coupé" className="type-icon" />
                                Coupé
                            </li>
                            <li>
                                <img src="/logos/convertible-icon.jpg" alt="Convertible" className="type-icon" />
                                Convertible
                            </li>
                            <li>
                                <img src="/logos/pickup-icon.jpg" alt="Pickup" className="type-icon" />
                                Pickup
                            </li>
                            <li>
                                <img src="/logos/minivan-icon.jpg" alt="Minivan" className="type-icon" />
                                Minivan
                            </li>
                        </ul>
                    </div>
                )}

                {activeDropdown === "ubicacion" && (
                    <div className="location-dropdown">
                        <ul>
                            <li>Ciudad de México</li>
                            <li>Cuernavaca</li>
                            <li>Guadalajara</li>
                            <li>Monterrey</li>
                            <li>Puebla</li>
                            <li>Querétaro</li>
                        </ul>
                    </div>
                )}

                {/* Contenido principal */}
                <div className="main-content">
                    <h1 className="title">Bienvenido al Concesionario</h1>
                    <p className="description">
                        Encuentra los mejores carros al mejor precio. Explora nuestro catálogo y descubre tu próximo vehículo.
                    </p>
                    <button className="button" onClick={() => alert('¡Explorar catálogo!')}>
                        Explorar catálogo
                    </button>
                </div>

                {/* Carrusel */}
                <div className="carousel">
                    <h2>Razones para ser cliente de TECAR</h2>
                    <div className="carousel-items">
                        <div className="carousel-item">
                            <img src="/path/to/image1.jpg" alt="Imagen 1" />
                            <h3>¡Autos nuevos y seminuevos te esperan!</h3>
                            <p>Tenemos un catálogo con miles de opciones a precios competitivos.</p>
                        </div>
                        <div className="carousel-item">
                            <img src="/path/to/image2.jpg" alt="Imagen 2" />
                            <h3>Prueba por 7 días o hasta 300 km</h3>
                            <p>¿No te convence? Cámbialo por otro auto sin problemas.</p>
                        </div>
                        <div className="carousel-item">
                            <img src="/path/to/image3.jpg" alt="Imagen 3" />
                            <h3>Certificamos todos nuestros autos</h3>
                            <p>Revisamos mecánica, estética y documentación para tu seguridad.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
