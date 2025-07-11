import React, { useState } from 'react';

import img1 from '../assets/Que-habilidades-debe-tener-un-electricista 1 (1).png';
import img2 from '../assets/image 4.png';
import img3 from '../assets/image 5.png';
import img4 from '../assets/Slide Image.png';
import img5 from '../assets/Slide Item — 2.png';

const images = [img1, img2, img3, img4, img5];

const Servicios = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Servicios</h1>
      <div style={styles.carousel}>
        <button onClick={prevSlide} style={styles.button} aria-label="Previous Slide">
          &#10094;
        </button>
        <img src={images[currentIndex]} alt={`Servicio ${currentIndex + 1}`} style={styles.image} />
        <button onClick={nextSlide} style={styles.button} aria-label="Next Slide">
          &#10095;
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: 800,
    margin: '40px auto',
    padding: 20,
    textAlign: 'center',
    color: '#0079B5',
  },
  title: {
    fontSize: '4rem',
    marginBottom: 30,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  carousel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  button: {
    fontSize: '2.5rem',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#0079B5',
    cursor: 'pointer',
    userSelect: 'none',
  },
  image: {
    maxWidth: '90vw',
    maxHeight: '70vh',
    borderRadius: 40,
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
};

export default Servicios;
