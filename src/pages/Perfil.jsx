import React from 'react';

const Perfil = () => {
  // Puedes personalizar este contenido según los datos del usuario
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Mi Perfil</h1>
      <div style={styles.card}>
        <p style={styles.text}>Aquí aparecerá la información de tu perfil.</p>
        {/* Puedes agregar más detalles del usuario aquí */}
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '60vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f7fbfd',
    padding: '40px 0',
  },
  title: {
    fontSize: '2.2rem',
    color: '#0079B5',
    marginBottom: 24,
    fontWeight: 700,
  },
  card: {
    background: '#fff',
    borderRadius: 16,
    boxShadow: '0 2px 16px #0079B522',
    padding: 32,
    minWidth: 320,
    textAlign: 'center',
  },
  text: {
    fontSize: '1.1rem',
    color: '#222',
  },
};

export default Perfil;
