import React from 'react';
import iPhoneMockup from '../assets/iPhoneMockup.png';

const Solver = () => {
  return (
    <div style={styles.pageBg}>
      
      {/* Main title section */}
      <div style={styles.container}>
        <h1 style={styles.title}>Solver</h1>
      </div>
      
      {/* Sección de app móvil con iPhoneMockup, separada y centrada */}
      <section style={styles.appSection}>
        
        <div style={styles.appInfo}>
          <h2 style={styles.appTitle}>¡Llevá Solvy a todos lados!</h2>
          <p style={styles.appText}>
            Nuestra plataforma también está pensada para usarse desde tu celular. Gestioná tus servicios, respondé a tus clientes y recibí notificaciones en tiempo real, estés donde estés.
          </p>
          <ul style={styles.appList}>
            <li>✔️ Fácil de usar desde cualquier dispositivo</li>
            <li>✔️ Notificaciones instantáneas</li>
            <li>✔️ Todo tu trabajo organizado en un solo lugar</li>
          </ul>
        </div>
        <div style={styles.appImageBox}>
          <img src={iPhoneMockup} alt="Vista móvil de Solvy" style={styles.appImage} />
        </div>
      </section>
    </div>
  );
};

const styles = {
  pageBg: {
    background: '#f6fbfc',
    minHeight: '100vh',
    width: '100%',
  },
  container: {
    maxWidth: 900,
    margin: '0 auto',
    padding: '40px 5vw 0 5vw',
    fontFamily: "'Poppins', 'Segoe UI', Arial, sans-serif",
    textAlign: 'center',
  },
  title: {
    fontSize: '4rem',
    marginTop: 24,
    marginBottom: 30,
    fontWeight: '700',
    textTransform: 'uppercase',
    color: '#1d3443',
  },
  intro: {
    fontSize: '1.1rem',
    color: '#222',
    marginBottom: 24,
    lineHeight: 1.6,
  },
  subIntro: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: 40,
  },
  appSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 60,
    background: '#fff',
    padding: '50px 5vw 60px 5vw',
    margin: '40px auto 0 auto',
    borderRadius: 28,
    boxShadow: '0 4px 24px #e0e7ef22',
    maxWidth: 1100,
    flexWrap: 'wrap',
  },
  appImageBox: {
    flex: 1,
    minWidth: 320,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appImage: {
    width: 500,
    height: 'auto',
    objectFit: 'contain',
    borderRadius: 36,
    background: '#f6fbfc',
    boxShadow: 'none',
  },
  appInfo: {
    flex: 1.2,
    minWidth: 280,
    maxWidth: 480,
    textAlign: 'left',
  },
  appTitle: {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#1d3443',
    marginBottom: 18,
  },
  appText: {
    fontSize: '1.13rem',
    color: '#37474F',
    marginBottom: 18,
    lineHeight: 1.6,
  },
  appList: {
    fontSize: '1.08rem',
    color: '#0079B5',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    lineHeight: 2,
    fontWeight: 500,
  },
};

export default Solver;