import React, { useState } from 'react';

import img1 from '../assets/Que-habilidades-debe-tener-un-electricista 1 (1).png';
import img2 from '../assets/image 4.png';
import img3 from '../assets/image 5.png';
import img4 from '../assets/Slide Image.png';
import img5 from '../assets/Slide Item — 2.png';
import serviciospantalla from '../assets/serviciospantalla.png'; // asegurate de poner la extensión correcta

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
        <img
          src={images[currentIndex]}
          alt={`Servicio ${currentIndex + 1}`}
          style={styles.image}
        />
        <button onClick={nextSlide} style={styles.button} aria-label="Next Slide">
          &#10095;
        </button>
      </div>

      {/* SUBTITLE CENTRADO Y GRANDE */}
      <div style={styles.subtitleCenter}>
        En Solvy, nos dedicamos a proporcionar soluciones innovadoras y personalizadas que se adaptan a las necesidades específicas de nuestros clientes.
      </div>
<div style={styles.cardsGrid}>
  <div style={styles.card}>
    <img src={img1} alt="Limpieza" style={styles.cardImg} />
    <h3 style={styles.cardTitle}>Limpieza</h3>
    <p style={styles.cardDesc}>Servicios de limpieza a fondo para hogares y oficinas.</p>
  </div>
  <div style={styles.card}>
    <img src={img2} alt="Gasista" style={styles.cardImg} />
    <h3 style={styles.cardTitle}>Gasista</h3>
    <p style={styles.cardDesc}>Instalaciones, reparaciones y mantenimiento de gas.</p>
  </div>
  <div style={styles.card}>
    <img src={img3} alt="Plomero" style={styles.cardImg} />
    <h3 style={styles.cardTitle}>Plomero</h3>
    <p style={styles.cardDesc}>Problemas de grifería, cañerías y desagües.</p>
  </div>
  <div style={styles.card}>
    <img src={img4} alt="Electricista" style={styles.cardImg} />
    <h3 style={styles.cardTitle}>Electricista</h3>
    <p style={styles.cardDesc}>Instalaciones eléctricas y mantenimiento.</p>
  </div>
  <div style={styles.card}>
    <img src={img5} alt="Jardinería" style={styles.cardImg} />
    <h3 style={styles.cardTitle}>Jardinería</h3>
    <p style={styles.cardDesc}>Diseño y cuidado de jardines.</p>
  </div>
  <div style={styles.card}>
    <img src={img1} alt="Cocina" style={styles.cardImg} />
    <h3 style={styles.cardTitle}>Cocina</h3>
    <p style={styles.cardDesc}>Preparación de comida a domicilio y eventos.</p>
  </div>
  <div style={styles.card}>
    <img src={img2} alt="Lavado de auto" style={styles.cardImg} />
    <h3 style={styles.cardTitle}>Lavado de auto</h3>
    <p style={styles.cardDesc}>Lavado profesional a domicilio.</p>
  </div>
  <div style={styles.card}>
    <img src={img3} alt="Mudancero" style={styles.cardImg} />
    <h3 style={styles.cardTitle}>Mudancero</h3>
    <p style={styles.cardDesc}>Traslados y embalajes.</p>
  </div>
  <div style={styles.card}>
    <img src={img4} alt="Fumigación" style={styles.cardImg} />
    <h3 style={styles.cardTitle}>Fumigación</h3>
    <p style={styles.cardDesc}>Control de plagas con productos seguros.</p>
  </div>
  <div style={styles.card}>
    <img src={img5} alt="Cerrajería" style={styles.cardImg} />
    <h3 style={styles.cardTitle}>Cerrajería</h3>
    <p style={styles.cardDesc}>Aperturas, cambios y seguridad.</p>
  </div>
  <div style={styles.card}>
    <img src={img1} alt="Instalador" style={styles.cardImg} />
    <h3 style={styles.cardTitle}>Instalador</h3>
    <p style={styles.cardDesc}>Electrodomésticos, aires, y más.</p>
  </div>
  <div style={styles.card}>
    <img src={img2} alt="Pintor" style={styles.cardImg} />
    <h3 style={styles.cardTitle}>Pintor</h3>
    <p style={styles.cardDesc}>Pintura profesional para interiores y exteriores.</p>
  </div>
</div>
      {/* ESTILO HERO SECTION */}
      <div style={styles.heroSection}>
        
        <img src={serviciospantalla} alt="Servicios App" style={styles.phoneMockup} />
      </div>
    </div>
  );
};

const styles = {
  container: {
  maxWidth: 1200,
  margin: '-5px auto',  // antes 10px, ahora 0px para subir más
  padding: 20,
  textAlign: 'center',
  color: '#0079B5',
},
title: {
  fontSize: '4rem',
  marginBottom: 60,    // antes 40px, ahora 28px para acercar más
  fontWeight: '700',
  textTransform: 'uppercase',
},
  carousel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 40,
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
    width: 1400, // antes 1200, ahora 1400 para agrandar más
    height: 480, // agrega altura fija para asegurar tamaño grande
    objectFit: 'cover', // asegura que la imagen se vea bien
    borderRadius: 48,   // opcional: más redondeado
    boxShadow: '0 6px 18px rgba(0,0,0,0.13)', // sombra más notoria
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    marginBottom: 20,
  },
  services: {
    display: 'flex',
    gap: 30,
    marginTop: 20,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  textContainer: {
    flex: 1,
    minWidth: '300px',
    textAlign: 'left',
    color: '#333',
    fontSize: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  sideImage: {
    flex: '0 0 300px',
    maxWidth: '100%',
    height: 'auto',
    borderRadius: 20,
    boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
  },
    heroSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', // centra el contenido horizontalmente
    gap: '80px',              // más espacio entre card y celular
    flexWrap: 'wrap',
    marginTop: '60px',
    padding: '20px 0',
  },

 phoneMockup: {
    maxWidth: '380px',        // agranda la imagen del celular
    width: '100%',
    height: 'auto',
    flexShrink: 0,
    borderRadius: '24px',
  },
subtitleCenter: {
    fontWeight: 'bold',
    fontSize: '2.2rem',
    textAlign: 'center',
    margin: '40px 0 0 0',
    color: '#0079B5',
    lineHeight: 1.2,
    marginTop: '10%',
    marginBottom: '10%'
  },
   serviciosCard: {
  background: '#fff',
  borderRadius: '24px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
  padding: '55px 105px',
  minWidth: '480px',
  maxWidth: '100%',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  marginLeft: '0px',
  textAlign: 'left', // quita el centrado
},
  serviciosTitle: {
    fontSize: '2rem',
    color: '#0079B5',
    fontWeight: '700',
    marginBottom: '20px',
    textAlign: 'center',      // centra el título
    letterSpacing: '1px',
    width: '100%',            // asegura centrado en el recuadro
  },

  serviciosList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    fontSize: '1.1rem',     // achica la tipografía
    color: '#222',
    lineHeight: 1.7,
  },  
servicioNombre: {
  fontWeight: 'bold',
  color: '#0079B5',
  marginRight: '6px',
},
servicioItem: {
  marginBottom: '8px', // más espacio entre servicios
},
cardsGrid: {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: '32px',
  margin: '60px 0',
},
card: {
  background: 'none', // sin contenedor blanco
  borderRadius: '24px',
  boxShadow: 'none',
  padding: '0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
},
cardImg: {
  width: '90%',
  height: '160px',   // antes 120px, ahora un poco más grande
  objectFit: 'cover',
  borderRadius: '18px',
  marginBottom: '18px',
},
cardTitle: {
  fontSize: '1.1rem',
  fontWeight: '700',
  color: '#0079B5',
  marginBottom: '8px',
  marginTop: '0',
},
cardDesc: {
  fontSize: '0.98rem',
  color: '#222',
  margin: 0,
},
};

export default Servicios;
