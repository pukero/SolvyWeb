import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Captura de pantalla 2025-05-23 083352 (1)-Photoroom 5.png';
import vectorIcon from '../assets/Vector.png';
import groupIcon from '../assets/Group.png';
import emailIcon from '../assets/Vector (1).png';
import phoneIcon from '../assets/Vector (2).png';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Sección principal */}
        <div style={styles.mainSection}>
          {/* Logo y descripción */}
          <div style={styles.brandSection}>
            <img src={logo} alt="Solvy Logo" style={styles.logo} />
            <p style={styles.description}>
              Conectamos profesionales independientes con clientes que necesitan servicios de calidad. 
              Tu éxito es nuestro compromiso.
            </p>
            <div style={styles.socialLinks}>
              <a href="#" style={styles.socialLink}>
                <img src={vectorIcon} alt="Twitter" style={styles.socialIcon} />
              </a>
              <a href="#" style={styles.socialLink}>
                <img src={groupIcon} alt="Instagram" style={styles.socialIcon} />
              </a>
              <a href="#" style={styles.socialLink}>
                <img src={emailIcon} alt="Email" style={styles.socialIcon} />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div style={styles.linksSection}>
            <h3 style={styles.sectionTitle}>Enlaces Rápidos</h3>
            <Link to="/solver" style={styles.footerLink}>Solver</Link>
            <Link to="/servicios" style={styles.footerLink}>Servicios</Link>
            <Link to="/contacto" style={styles.footerLink}>Contacto</Link>
            <Link to="/login" style={styles.footerLink}>Iniciar Sesión</Link>
          </div>

          {/* Contacto */}
          <div style={styles.contactSection}>
            <h3 style={styles.sectionTitle}>Contacto</h3>
            <div style={styles.contactItem}>
              <img src={phoneIcon} alt="Phone" style={styles.contactIcon} />
              <span style={styles.contactText}>+549 11 1234-5678</span>
            </div>
            <div style={styles.contactItem}>
              <img src={emailIcon} alt="Email" style={styles.contactIcon} />
              <span style={styles.contactText}>Solvy@gmail.com</span>
            </div>
            <div style={styles.contactItem}>
              <span style={styles.contactText}>Buenos Aires, Argentina</span>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div style={styles.divider}></div>

        {/* Sección inferior */}
        <div style={styles.bottomSection}>
          <div style={styles.copyright}>
            <span style={styles.copyrightText}>© 2025 Solvy. Todos los derechos reservados.</span>
          </div>
          <div style={styles.legalLinks}>
            <a href="#" style={styles.legalLink}>Política de Privacidad</a>
            <a href="#" style={styles.legalLink}>Términos de Servicio</a>
            <a href="#" style={styles.legalLink}>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: '#1d3443',
    color: '#ffffff',
    fontFamily: "'Poppins', 'Segoe UI', Arial, sans-serif",
    marginTop: 'auto',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '60px 5vw 30px 5vw',
  },
  mainSection: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr',
    gap: '40px',
    marginBottom: '40px',
  },
  brandSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'flex-start',
  },
  logo: {
    height: '60px',
    width: 'auto',
    maxWidth: '180px',
    objectFit: 'contain',
    filter: 'brightness(0) invert(1)',
    marginBottom: '8px',
  },
  description: {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    color: '#b0bec5',
    maxWidth: '300px',
  },
  socialLinks: {
    display: 'flex',
    gap: '16px',
    marginTop: '8px',
  },
  socialLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    background: '#0079B5',
    borderRadius: '50%',
    transition: 'background 0.3s, transform 0.2s',
  },
  socialIcon: {
    height: '18px',
    width: '18px',
    filter: 'brightness(0) invert(1)',
  },
  linksSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  sectionTitle: {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: '#ffffff',
    marginBottom: '16px',
  },
  footerLink: {
    color: '#b0bec5',
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'color 0.3s',
    padding: '4px 0',
  },
  contactSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  contactIcon: {
    height: '16px',
    width: '16px',
    filter: 'brightness(0) invert(1)',
  },
  contactText: {
    fontSize: '0.9rem',
    color: '#b0bec5',
  },
  divider: {
    height: '1px',
    background: 'linear-gradient(90deg, transparent, #0079B5, transparent)',
    margin: '40px 0',
  },
  bottomSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  },
  copyright: {
    flex: '1',
  },
  copyrightText: {
    fontSize: '0.85rem',
    color: '#90a4ae',
  },
  legalLinks: {
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
  },
  legalLink: {
    color: '#90a4ae',
    textDecoration: 'none',
    fontSize: '0.85rem',
    transition: 'color 0.3s',
  },
};

export default Footer;