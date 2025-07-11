import React from 'react';
import logo from '../assets/Captura de pantalla 2025-05-23 083352 (1)-Photoroom 5.png';
import vectorIcon from '../assets/Vector.png';
import groupIcon from '../assets/Group.png';
import emailIcon from '../assets/Vector (1).png';
import phoneIcon from '../assets/Vector (2).png';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="Logo" style={styles.logo} />
      </div>
      <div style={styles.textBlocks}>
        <span style={styles.textBlock}>© 2025 - Solvy. Todos los derechos reservados.</span>
        <div style={styles.textWithIcon}>
          <span style={styles.textBlock}>Solvy</span>
          <img src={vectorIcon} alt="Vector" style={styles.icon} />
        </div>
        <div style={styles.textWithIcon}>
          <span style={styles.textBlock}>Solvy</span>
          <img src={groupIcon} alt="Group" style={styles.icon} />
        </div>
        <div style={styles.textWithIcon}>
          <span style={styles.textBlock}>Solvy@gmail.com</span>
          <img src={emailIcon} alt="Email" style={styles.icon} />
        </div>
        <div style={styles.textWithIcon}>
          <span style={styles.textBlock}>+549 11 1234-5678</span>
          <img src={phoneIcon} alt="Phone" style={styles.icon} />
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    display: 'flex',
    alignItems: 'center',
    padding: '15px 20px',
    backgroundColor: '#0079B5',
    color: 'white',
  },
  logoContainer: {
    flex: '0 0 auto',
  },
  logo: {
    height: 40,
    width: 'auto',
  },
  textBlocks: {
    display: 'flex',
    gap: '20px',
    marginLeft: '20px',
    alignItems: 'center',
  },
  textBlock: {
    fontSize: '0.9rem',
    color: 'white',
  },
  textWithIcon: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
  icon: {
    height: 16,
    width: 16,
  },
};

export default Footer;
