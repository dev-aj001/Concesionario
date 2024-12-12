import React from 'react';
import '../styles/Carousel.css';

const Carousel = ({ slides, currentSlide, handleNext, handlePrev }) => {
  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={handlePrev}>❮</button>
      <div
        className="carousel-track"
        style={{
          transform: `translateX(-${currentSlide * 102}%)`,
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
      <button className="carousel-button next" onClick={handleNext}>❯</button>
    </div>
  );
};

export default Carousel;
