import React from 'react';

const LandingPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Bienvenido a Solvy</h1>
      <p style={styles.subtitle}>Tu plataforma de soluciones digitales</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60vh',
    textAlign: 'center',
  },
  title: {
    fontSize: '3rem',
    color: '#0079B5',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#666',
  },
};

export default LandingPage;
