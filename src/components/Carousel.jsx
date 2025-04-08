import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    console.log('Carousel mounted');
    console.log('Images:', images);

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
        console.log('Switching to index:', newIndex);
        return newIndex;
      });
    }, 3000);

    return () => {
      console.log('Carousel unmounted');
      clearInterval(timer);
    };
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      console.log('Previous clicked, new index:', newIndex);
      return newIndex;
    });
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      console.log('Next clicked, new index:', newIndex);
      return newIndex;
    });
  };

  return (
    <div
      className="carousel"
      ref={containerRef}
    >
      <button
        className="carousel-button prev"
        onClick={goToPrevious}
      >
        &#8249;
      </button>
      <div className="carousel-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentIndex ? 'active' : ''
            }`}
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`,
            }}
          >
            <img
              src={image.url}
              alt={image.alt}
              onError={(e) => {
                console.error('Image failed to load:', image.url);
                e.target.src =
                  'https://via.placeholder.com/800x400?text=图片加载失败';
              }}
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-button next"
        onClick={goToNext}
      >
        &#8250;
      </button>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => {
              console.log('Dot clicked, index:', index);
              setCurrentIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
