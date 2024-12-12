import React, { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Dropdown from '../components/Dropdown';
import Carousel from '../components/Carousel';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';
import '../styles/Home.css';

const Home = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
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
      <Header />
      <SearchBar toggleDropdown={toggleDropdown} />
      {activeDropdown && (
        <Dropdown
          type={activeDropdown}
          items={[
            {
              brand: 'BMW',
              logo: '/logos/bmw-logo.png',
              models: ['X6', 'X5', 'Serie 3', 'I3'],
            },
            {
              brand: 'Mercedes',
              logo: '/logos/mercedes-logo.jpg',
              models: ['Clase Gle', 'Clase A', 'Clase C', 'Clase E'],
            },
            {
              brand: 'Volkswagen',
              logo: '/logos/vw-logo.jpg',
              models: ['Vento', 'Beetle', 'Tiguan', 'Virtus'],
            }
          ]}
        />
      )}
      <MainContent />
      <Carousel slides={slides} currentSlide={currentSlide} handleNext={handleNext} handlePrev={handlePrev} />
      <Footer />
    </div>
  );
};

export default Home;
