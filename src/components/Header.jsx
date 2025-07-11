import React from 'react';
import logo from '../assets/Captura de pantalla 2025-05-23 083352 (1)-Photoroom 5.png';
import profilePic from '../assets/Group 87.png';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="Logo" style={styles.logo} />
      </div>
      <nav style={styles.nav}>
        <button style={styles.button}>Solver</button>
        <button style={styles.button}>Servicios</button>
        <button style={styles.button}><Contacto></Contacto></button>
      </nav>
      <div style={styles.profileContainer}>
        <img src={profilePic} alt="Profile" style={styles.profile} />
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: '#0079B5',
    color: 'white',
  },
  logoContainer: {
    flex: '0 0 auto',
  },
  logo: {
    height: 50,
    width: 'auto',
  },
  nav: {
    display: 'flex',
    gap: '15px',
    flex: '1 1 auto',
    justifyContent: 'center',
  },
  button: {
    padding: '8px 16px',
    fontSize: '1rem',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    color: 'white',
    border: '1px solid white',
    borderRadius: '4px',
  },
  profileContainer: {
    flex: '0 0 auto',
  },
  profile: {
    height: 40,
    width: 40,
    borderRadius: '50%',
  },
};

export default Header;
