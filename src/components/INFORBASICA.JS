import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

const Home = () => {
    const [activeDropdown, setActiveDropdown] = useState(null); // Controla qué dropdown está abierto
    const [currentSlide, setCurrentSlide] = useState(0);

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown); // Cierra si está abierto o abre el nuevo
    };
    const slides = [
        {
          img: "https://th.bing.com/th/id/R.75a1d8918d9348aa19a51a2f7c8efd63?rik=lWNlRn3ImhXPzA&pid=ImgRaw&r=0",
          title: "Toyota Corolla 2023",
          description: "Compacto, eficiente y confiable. Ideal para la ciudad y carretera.",
        },
        {
          img: "https://th.bing.com/th/id/R.2bdddedb36881edbe2d5fd8d488c702a?rik=Th31QlmWeDum0g&pid=ImgRaw&r=0",
          title: "Ford F-150 2023",
          description: "Potencia y rendimiento para cualquier trabajo. Líder en camionetas.",
        },
        {
          img: "https://th.bing.com/th/id/OIP.xi7hl-8devzXWoQfJ8gaQwHaE8?rs=1&pid=ImgDetMain",
          title: "Honda Civic 2023",
          description: "Diseño moderno, alto rendimiento y gran seguridad.",
        },
        {
          img: "https://th.bing.com/th/id/OIP.2Lvp6IVo6ErWjzEWh8TZUwHaEH?rs=1&pid=ImgDetMain",
          title: "Chevrolet Tahoe 2023",
          description: "SUV espaciosa y cómoda para toda la familia.",
        },
        {
          img: "https://th.bing.com/th/id/OIP.XPGJlrJEBYa5WxqMkwhdfgHaFj?rs=1&pid=ImgDetMain",
          title: "Tesla Model 3 2023",
          description: "Eléctrico, innovador y amigable con el medio ambiente.",
        },
      ];
      

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      };
    
      const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
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
                            <a href="/Ventanas/Nosotros/nosotros.js" className="nav-link">Nosotros</a>
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
                    <button className="carousel-button prev" onClick={handlePrev}>
                    ❮
                    </button>
                    <div
                    className="carousel-track"
                    style={{
                        transform: translateX(-${currentSlide * 102}%),
                    }}
                    >
                    {slides.map((slide, index) => (
                        <div className="carousel-slide" key={index}>
                        <img src={slide.img} alt={slide.title} />
                        <h3>{slide.title}</h3>
                        <p>{slide.description}</p>
                        </div>
                    ))}
                    </div>
                    <button className="carousel-button next" onClick={handleNext}>
                    ❯
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;