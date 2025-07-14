import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Captura de pantalla 2025-05-23 083352 (1)-Photoroom 5.png';
import profilePic from '../assets/Group 87.png';


const Header = () => {
  return (
    <>

    <header style={styles.header}>

      <div style={styles.logoContainer}>
                        <img src={logo} alt="Logo" style={styles.logo} />

      </div>
      <div style={styles.centerNavContainer}>
        <nav style={styles.nav}>
          <Link to="/" style={styles.link}>Solver</Link>
          <Link to="/servicios" style={styles.link}>Servicios</Link>
          <Link to="/contacto" style={styles.link}>Contacto</Link>
        </nav>
      </div>
      <div style={styles.profileContainer}>
        <img src={profilePic} alt="Profile" style={styles.profile} />
      </div>
    </header>
    </>
  );
};


const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: ' ',
    padding: '30px', // más espacio arriba
    background: 'transparent',
    boxShadow: 'none', // sin línea ni sombra abajo
    fontFamily: "'Poppins', 'Segoe UI', Arial, sans-serif",
    position: 'sticky',
    top: 0,
    zIndex: 10,
    backdropFilter: 'blur(4px)',
    width: '100%',
  },
  logoContainer: {
    flex: '0 0 auto',
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  logo: {
    height: 45, // achicado
    width: 'auto',
  },
  brand: {
    fontFamily: "'Poppins', 'Segoe UI', Arial, sans-serif",
    fontWeight: 700,
    fontSize: '1.15rem',
    color: '#0079B5',
    letterSpacing: '1px',
    marginLeft: 6,
    userSelect: 'none',
  },
  centerNavContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  nav: {
    display: 'flex',
    gap: '24px',
    fontSize: '1.08rem',
    fontWeight: 500,
    fontFamily: "'Poppins', 'Segoe UI', Arial, sans-serif",
  },
  link: {
    color: '#0079B5', // azul
    textDecoration: 'none',
    padding: '8px 18px',
    background: '#e0f3fc',
    borderRadius: '12px',
    fontWeight: 600,
    boxShadow: '0 2px 8px #e0e7ef33',
    border: '1.5px solid #cce6fa',
    transition: 'background 0.2s, color 0.2s, box-shadow 0.2s',
    display: 'flex',
    alignItems: 'center',
  },
  profileContainer: {
    flex: '0 0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    minWidth: 48,
  },
  profile: {
    height: 40,
    width: 40,
    borderRadius: '50%',
    boxShadow: '0 2px 8px #e0e7ef33',
    border: '2px solid #e0e7ef',
    background: '#fff',
    objectFit: 'cover',
  },
};


export default Header;
