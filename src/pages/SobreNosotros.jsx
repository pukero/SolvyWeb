import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import equipoImg from '../assets/Group.png';

const SobreNosotros = () => {
  const navigate = useNavigate();
  const handleContacto = () => {
    navigate('/contacto');
  };
  // Contador animado de servicios realizados
  const [servicios, setServicios] = useState(0);
  useEffect(() => {
    const end = 1200;
    if (servicios < end) {
      const timer = setInterval(() => {
        setServicios(prev => {
          const next = prev + Math.ceil((end - prev) / 15);
          return next >= end ? end : next;
        });
      }, 30);
      return () => clearInterval(timer);
    }
  }, [servicios]);
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Sobre Nosotros</h1>
      <div style={styles.flexSection}>
        <div style={{flex: 2}}>
          <p style={styles.text}>
            En Solvy, creemos en el poder de la tecnología para conectar personas y oportunidades. Somos un equipo joven y apasionado que busca facilitar el acceso a servicios de calidad, ayudando tanto a trabajadores independientes como a quienes necesitan soluciones confiables.
          </p>
          <p style={styles.text}>
            Nuestra misión es crear una comunidad donde el esfuerzo, la confianza y la innovación sean los pilares para el crecimiento profesional y personal de todos los usuarios.
          </p>
          <div style={styles.valuesBox}>
            <h2 style={styles.valuesTitle}>Nuestros valores</h2>
            <ul style={styles.valuesList}>
              <li><strong>Compromiso:</strong> Trabajamos para que cada usuario tenga la mejor experiencia posible.</li>
              <li><strong>Confianza:</strong> Fomentamos relaciones honestas y transparentes entre clientes y trabajadores.</li>
              <li><strong>Innovación:</strong> Buscamos mejorar y crecer constantemente, adaptándonos a las nuevas necesidades.</li>
              <li><strong>Inclusión:</strong> Creemos que todos merecen oportunidades para progresar.</li>
            </ul>
          </div>
        </div>

      </div>
     
      <div style={styles.statsSection}>
        <div style={styles.statBox}>
          <span style={styles.statNumber}>{servicios.toLocaleString()}</span>
          <span style={styles.statLabel}>Servicios realizados</span>
        </div>
        <div style={styles.statBox}>
          <span style={styles.statNumber}>+500</span>
          <span style={styles.statLabel}>Usuarios activos</span>
        </div>
        <div style={styles.statBox}>
          <span style={styles.statNumber}>4.9/5</span>
          <span style={styles.statLabel}>Calificación promedio</span>
        </div>
      </div>
      <p style={styles.graciasText}>
        ¡Gracias por ser parte de Solvy!
      </p>
      <button style={styles.contactBtn} onClick={handleContacto}>
        Contactar al equipo
      </button>
      <div style={styles.testimoniosSection}>
        <h2 style={styles.testimoniosTitle}>Testimonios</h2>
        <div style={styles.testimoniosList}>
          <div style={styles.testimonioCard}>
            <p style={styles.testimonioText}>
              “Gracias a Solvy conseguí más clientes y pude organizar mejor mi trabajo. ¡Muy recomendable!”
            </p>
            <span style={styles.testimonioAutor}>— Carla, Electricista</span>
          </div>
          <div style={styles.testimonioCard}>
            <p style={styles.testimonioText}>
              “La plataforma es fácil de usar y siempre encuentro profesionales confiables para mis necesidades.”
            </p>
            <span style={styles.testimonioAutor}>— Martín, Usuario</span>
          </div>
          <div style={styles.testimonioCard}>
            <p style={styles.testimonioText}>
              “Me sumé a Solvy y logré crecer como independiente. La comunidad es muy buena.”
            </p>
            <span style={styles.testimonioAutor}>— Lucía, Plomera</span>
          </div>
        </div>
      </div>
      
    </div>
  );
};

const styles = {
  statsSection: {
    display: 'flex',
    justifyContent: 'center',
    gap: '48px',
    margin: '32px 0 18px 0',
    flexWrap: 'wrap',
  },
  statBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#e3f2fd',
    borderRadius: '12px',
    padding: '18px 32px',
    minWidth: '140px',
    boxShadow: '0 1px 6px rgba(25, 118, 210, 0.07)',
  },
  statNumber: {
    fontSize: '2.1rem',
    color: '#1976d2',
    fontWeight: 700,
    marginBottom: '4px',
  },
  statLabel: {
    fontSize: '1.05rem',
    color: '#333',
    fontWeight: 500,
  },
  testimoniosSection: {
    margin: '38px 0 0 0',
    textAlign: 'center',
  },
  testimoniosTitle: {
    fontSize: '1.5rem',
    color: '#1976d2',
    fontWeight: 700,
    marginBottom: '18px',
  },
  testimoniosList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '24px',
    justifyContent: 'center',
  },
  testimonioCard: {
    background: '#fff',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(25,118,210,0.07)',
    padding: '18px 22px',
    maxWidth: '320px',
    minWidth: '220px',
    textAlign: 'left',
  },
  testimonioText: {
    fontSize: '1.08rem',
    color: '#222',
    marginBottom: '10px',
    fontStyle: 'italic',
  },
  testimonioAutor: {
    fontSize: '1rem',
    color: '#1976d2',
    fontWeight: 600,
  },
  container: {
    maxWidth: '800px',
    margin: '40px auto',
    padding: '32px',
    background: '#f6fbfc',
    borderRadius: '16px',
    boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
    textAlign: 'center',
  },
  flexSection: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: '32px',
    marginBottom: '32px',
    width: '100%',
  },
  '@media (max-width: 700px)': {
    container: {
      padding: '12px',
    },
    flexSection: {
      flexDirection: 'column',
      gap: '18px',
      marginBottom: '18px',
    },
    title: {
      fontSize: '1.5rem',
    },
    text: {
      fontSize: '1rem',
    },
    valuesBox: {
      padding: '10px 8px',
    },
    quote: {
      fontSize: '1rem',
    },
    contactBtn: {
      fontSize: '1rem',
      padding: '10px 18px',
    },
  },
  imgBox: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '220px',
  },
  equipoImg: {
    width: '210px',
    height: '210px',
    objectFit: 'contain',
    borderRadius: '18px',
    background: '#fff',
    boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
    marginBottom: '10px',
    padding: '12px',
    border: '1.5px solid #e3f2fd',
  },
  imgCaption: {
    fontSize: '1rem',
    color: '#1976d2',
    marginTop: '6px',
    fontWeight: 500,
    letterSpacing: '0.5px',
  },
  valuesBox: {
    background: '#e3f2fd',
    borderRadius: '12px',
    padding: '18px 22px',
    margin: '18px 0 0 0',
    textAlign: 'left',
    boxShadow: '0 1px 6px rgba(25, 118, 210, 0.07)',
  },
  valuesTitle: {
    fontSize: '1.3rem',
    color: '#1976d2',
    marginBottom: '10px',
    fontWeight: 600,
  },
  valuesList: {
    fontSize: '1.08rem',
    color: '#333',
    margin: 0,
    paddingLeft: '18px',
    lineHeight: 1.7,
  },
  contactBtn: {
    margin: '24px 0 12px 0',
    padding: '12px 32px',
    background: '#1976d2',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: 600,
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(25,118,210,0.08)',
    transition: 'background 0.2s',
  },
  quote: {
    fontStyle: 'italic',
    color: '#1976d2',
    fontSize: '1.25rem',
    margin: '32px 0 12px 0',
    fontWeight: 500,
  },
  title: {
    fontSize: '2.5rem',
    color: '#1976d2',
    marginBottom: '18px',
    fontWeight: 700,
  },
  text: {
    fontSize: '1.15rem',
    color: '#333',
    marginBottom: '16px',
    lineHeight: 1.7,
  },
  graciasText: {
    fontSize: '2rem',
    color: '#1976d2',
    fontWeight: 700,
    margin: '40px 0 24px 0',
    textAlign: 'center',
    letterSpacing: '0.5px',
  },
};

export default SobreNosotros;
