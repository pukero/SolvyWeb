import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import logo from '../assets/Captura de pantalla 2025-05-23 083352 (1)-Photoroom 5.png';
import avatarDefault from '../assets/avatar-default.svg';

const Header = () => {
  const [user, setUser] = useState(null);
  const [fotoUrl, setFotoUrl] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('solvyUser');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setUser(parsed);
        if (parsed.fotopersonal) {
          // Si ya es una URL absoluta, úsala directamente
          if (parsed.fotopersonal.startsWith('http')) {
            setFotoUrl(parsed.fotopersonal);
          } else {
            // Si es una ruta relativa, genera la URL pública
            const { publicURL } = supabase.storage.from('foto-perfil').getPublicUrl(parsed.fotopersonal);
            setFotoUrl(publicURL);
          }
        } else {
          setFotoUrl(null);
        }
      } catch {
        setUser(null);
        setFotoUrl(null);
      }
    } else {
      setUser(null);
      setFotoUrl(null);
    }
  }, []);

  // Si el usuario cambia (login/logout en otra pestaña)
  useEffect(() => {
    const onStorage = () => {
      const stored = localStorage.getItem('solvyUser');
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          setUser(parsed);
          if (parsed.fotopersonal) {
            if (parsed.fotopersonal.startsWith('http')) {
              setFotoUrl(parsed.fotopersonal);
            } else {
              const { publicURL } = supabase.storage.from('foto-perfil').getPublicUrl(parsed.fotopersonal);
              setFotoUrl(publicURL);
            }
          } else {
            setFotoUrl(null);
          }
        } catch {
          setUser(null);
          setFotoUrl(null);
        }
      } else {
        setUser(null);
        setFotoUrl(null);
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  return (
    <header style={styles.header}>
      <div style={styles.logoBrand}>
        <Link to="/" style={styles.logoLink}>
          <img src={logo} alt="Solvy Logo" style={styles.logo}/>
        </Link>
      </div>
      <nav style={styles.nav}>
        <Link to="/solver" style={styles.link}>Solver</Link>
        <Link to="/servicios" style={styles.link}>Servicios</Link>
        <Link to="/contacto" style={styles.link}>Contacto</Link>
        {user && (
          <Link to="/mis-servicios" style={styles.link}>Mis Servicios</Link>
        )}
      </nav>
      <div style={styles.actions}>
        {user ? (
          <img
            src={fotoUrl ? fotoUrl : avatarDefault}
            alt="Perfil"
            style={styles.profilePic}
            onClick={() => navigate('/perfil')}
            title="Ver perfil"
          />
        ) : (
          <>
            <Link to="/login" style={styles.loginBtn}>Login</Link>
            <Link to="/registrarse" style={styles.signUpBtn}>Registrarse</Link>
          </>
        )}
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '28px 5vw 0 5vw',
    background: 'transparent',
    marginBottom: '32px',
    fontFamily: "'Poppins', 'Segoe UI', Arial, sans-serif",
    position: 'sticky',
    top: 0,
    zIndex: 10,
    backdropFilter: 'blur(3px)',
    width: '100%',
    gap: '48px',
  },
  logoBrand: {
    display: 'flex',
    alignItems: 'center',
    width: 130
  },
  logoLink: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  logo: {
    height: 55,
    width: 'auto',
  },
  nav: {
    display: 'flex',
    gap: 50,
    flex: 1,
  },
  link: {
    color: '#222',
    textDecoration: 'none',
    fontSize: '1.01rem',
    padding: '8px 18px',
    background: '#e0f3fc',
    borderRadius: '12px',
    fontWeight: 600,
    boxShadow: '0 2px 8px #e0e7ef33',
    transition: 'background 0.2s, color 0.2s, box-shadow 0.2s',
    display: 'flex',
  },
  actions: {
    display: 'flex',
    gap: 12,
    alignItems: 'center',
  },
  loginBtn: {
    padding: '8px 22px',
    border: '1.5px solid #e0e7ef',
    borderRadius: '12px',
    background: '#fff',
    color: '#0079B5',
    textDecoration: 'none',
    fontSize: '1.01rem',
    fontWeight: 600,
  },
  signUpBtn: {
    padding: '8px 22px',
   borderRadius: '12px',
    background: '#0079B5',
    color: '#fff',
    fontWeight: 600,
    textDecoration: 'none',
    fontSize: '1.01rem',
    border: 'none'
  },
  profilePic: {
    width: 44,
    height: 44,
    borderRadius: '50%',
    objectFit: 'cover',
    cursor: 'pointer',
    border: '2px solid #0079B5',
    boxShadow: '0 2px 8px #0079B522',
    transition: 'box-shadow 0.2s',
  },
};

export default Header;