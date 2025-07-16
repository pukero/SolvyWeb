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
        <p style={styles.subtitle}>
          En Solvy, nos dedicamos a proporcionar soluciones innovadoras y personalizadas que se adaptan a las necesidades específicas de nuestros clientes. Nuestro enfoque se centra en ofrecer servicios de alta calidad en diversas áreas, garantizando resultados efectivos y un impacto positivo en el crecimiento de tu negocios.        
        </p>
        <p>Limpieza: Ofrecemos servicios de limpieza a fondo para hogares y oficinas, asegurando un ambiente limpio y saludable. Nuestro equipo se encarga de cada rincón, utilizando productos de calidad y técnicas eficientes.</p>

<p>Gasista: Nuestros gasistas certificados están disponibles para realizar instalaciones, reparaciones y mantenimientos de sistemas de gas. Garantizamos seguridad y cumplimiento de normativas en cada trabajo.</p>

<p> Plomero: Brindamos servicios de fontanería para resolver problemas de tuberías, grifos y desagües. Ya sea una fuga o una instalación nueva, nuestros plomeros están listos para ayudarte. </p>

<p> Electricista: Contamos con electricistas profesionales que realizan instalaciones eléctricas, reparaciones y mantenimientos. Aseguramos un servicio seguro y eficiente para todas tus necesidades eléctricas.</p>

<p> Jardinería: Ofrecemos servicios de jardinería que incluyen diseño, mantenimiento y cuidado de espacios verdes. Transformamos tu jardín en un lugar hermoso y acogedor. </p>

<p> Cocina: Nuestros servicios de cocina incluyen la preparación de comidas a domicilio y catering para eventos. Disfruta de platos deliciosos y personalizados, preparados por chefs expertos. </p>

<p> Lavado de auto: Proporcionamos servicios de lavado de autos a domicilio, utilizando productos de calidad para dejar tu vehículo impecable. Cuidamos cada detalle para que tu auto luzca como nuevo. </p>

<p> Mudancero: Facilitamos el proceso de mudanza con nuestros servicios de transporte y embalaje. Nos encargamos de que tus pertenencias lleguen a su nuevo destino de manera segura y eficiente. </p>

<p> Fumigación: Ofrecemos servicios de fumigación para el control de plagas en hogares y negocios. Utilizamos productos seguros y efectivos para garantizar un ambiente libre de insectos. </p>

<p> Cerrajería: Nuestros cerrajeros están disponibles para abrir puertas, cambiar cerraduras y mejorar la seguridad de tu hogar o negocio. Confía en nosotros para resolver cualquier problema de cerrajería. </p>

<p> Instalador: Brindamos servicios de instalación para una variedad de productos, desde electrodomésticos hasta sistemas de climatización. Aseguramos un montaje profesional y eficiente. </p>

<p> Pintor: Ofrecemos servicios de pintura interior y exterior, utilizando materiales de alta calidad para un acabado duradero. Transformamos tus espacios con colores y técnicas que se adaptan a tu estilo. </p>
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
