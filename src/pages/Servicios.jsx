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
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

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

  const handleTilt = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const maxDeg = 10;
    const rotateY = (x - 0.5) * maxDeg * 2;
    const rotateX = -(y - 0.5) * maxDeg * 2;
    setTilt({ rotateX, rotateY });
  };

  const resetTilt = () => setTilt({ rotateX: 0, rotateY: 0 });

    return (
    <div style={styles.container}>
      <h1 style={styles.title}>Servicios</h1>

      <div style={styles.carousel}>
        <img
          src={images[currentIndex]}
          alt={`Servicio ${currentIndex + 1}`}
          style={styles.image}
        />
        <button onClick={prevSlide} style={{...styles.carouselButton, ...styles.carouselButtonLeft}} aria-label="Previous Slide">&#10094;</button>
        <button onClick={nextSlide} style={{...styles.carouselButton, ...styles.carouselButtonRight}} aria-label="Next Slide">&#10095;</button>
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
      {/* ESTILO HERO SECTION - Modernizado */}
      <section style={styles.heroWrapper}>
        <div style={styles.heroSection}>
          <div style={styles.glassCard}>
            <h2 style={styles.ctaTitle}>Gestioná tus servicios con Solvy</h2>
            <p style={styles.ctaSubtitle}>
              Reservá profesionales verificados en minutos. Seguimiento en tiempo real,
              soporte 24/7 y pagos seguros.
            </p>
           
          </div>

          <div
            style={styles.phoneWrapper}
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
          >
            <div style={styles.phoneGlow} />
            <img
              src={serviciospantalla}
              alt="Servicios App"
              style={{
                ...styles.phoneMockup,
                transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
              }}
            />

            <div style={{ ...styles.badge, ...styles.badgeTopLeft }}>⭐ 4.9 / 5</div>
            <div style={{ ...styles.badge, ...styles.badgeTopRight }}>⚡ 24/7</div>
            <div style={{ ...styles.badge, ...styles.badgeBottomLeft }}>🔒 Pago seguro</div>
          </div>
        </div>

        <style>{`@keyframes floatUpDown { 0% { transform: translateY(0); } 100% { transform: translateY(-10px); } }`}</style>
      </section>
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
  width: '100%',
  overflowX: 'hidden',
},
container: {
  maxWidth: 1200,
  margin: '0 auto', // Antes: '-5px auto', ahora bien arriba y centrado
  padding: '0 20px 20px 20px', // Padding arriba en 0
  textAlign: 'center',
  color: '#0079B5',
  width: '100%',
  overflowX: 'hidden',
},
title: {
  fontSize: '4rem',
  marginTop: 24,      // Nuevo: sube el título
  marginBottom: 30,   // Más cerca del carousel
  fontWeight: '700',
  textTransform: 'uppercase',
},
carousel: {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 20,
  marginBottom: 40,
  marginTop: 0,       // Nuevo: elimina espacio arriba del carousel
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
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
    width: '100%',
    maxWidth: 1200,
    height: 600, // antes 480, ahora más alto
    objectFit: 'cover',
    borderRadius: 48,
    boxShadow: '0 6px 18px rgba(0,0,0,0.13)',
  },
  carouselButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '2.2rem',
    background: 'rgba(255,255,255,0.75)',
    border: '1px solid rgba(255,255,255,0.9)',
    color: '#0079B5',
    cursor: 'pointer',
    userSelect: 'none',
    borderRadius: 12,
    padding: '4px 10px',
  },
  carouselButtonLeft: {
    left: 12,
  },
  carouselButtonRight: {
    right: 12,
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
  heroWrapper: {
    background: 'linear-gradient(180deg, rgba(0,121,181,0.08) 0%, rgba(0,121,181,0.02) 100%)',
    borderRadius: '32px',
    padding: '80px 24px',
    marginTop: '60px',
    position: 'relative',
    overflow: 'hidden',
  },

  heroSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '48px',
    flexWrap: 'wrap',
    margin: '0 auto',
    maxWidth: '1200px',
    padding: '0',
  },

  phoneWrapper: {
    position: 'relative',
    perspective: '1000px',
    width: '420px',
    maxWidth: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  phoneMockup: {
    maxWidth: '380px',  
    width: '100%',
    height: 'auto',
    flexShrink: 0,
    borderRadius: '24px',
    transition: 'transform 180ms ease',
    willChange: 'transform',
  },

  phoneGlow: {
    position: 'absolute',
    width: '420px',
    height: '420px',
    borderRadius: '50%',
    background: 'radial-gradient(circle at 50% 50%, rgba(0,121,181,0.35), rgba(0,121,181,0) 60%)',
    filter: 'blur(40px)',
    zIndex: 0,
  },

  badge: {
    position: 'absolute',
    zIndex: 2,
    background: 'rgba(255,255,255,0.6)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    border: '1px solid rgba(255,255,255,0.8)',
    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
    color: '#0B3B53',
    fontWeight: '700',
    fontSize: '0.9rem',
    padding: '10px 14px',
    borderRadius: '999px',
  },

  badgeTopLeft: {
    top: '-6px',
    left: '-6px',
  },
  badgeTopRight: {
    top: '12%',
    right: '-10px',
    animationDuration: '5s',
  },
  badgeBottomLeft: {
    bottom: '-6px',
    left: '8%',
    animationDuration: '6s',
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
