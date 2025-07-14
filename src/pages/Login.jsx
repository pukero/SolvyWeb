import React, { useState } from 'react';
import logo from '../assets/Captura de pantalla 2025-05-23 083352 (1)-Photoroom 5.png';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div style={styles.bg}>
      <div style={styles.card}>
          <img src={logo} alt="Logo" style={styles.logo} />
          <h2 style={styles.title}>Bienvenido a Solvy</h2>
          <p style={styles.subtitle}>Inicia sesión para continuar</p>
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <input
              type="text"
              name="usuario"
              style={styles.input}
              placeholder="Usuario"
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <input
              type={"password"}
              name="password"
              style={styles.input}
              placeholder="Contraseña"
              required
            />
            <button
              type="button"
              style={styles.showBtn}
            >
            </button>
          </div>
          <button type="submit" style={styles.button}>Ingresar</button>
        </form>
        <div style={styles.footer}>
          <a href="#" style={styles.link}>¿Olvidaste tu contraseña?</a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  bg: {
    minHeight: '90vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Segoe UI, Arial, sans-serif',
  },
  card: {
    background: '#fff',
    padding: '40px 32px',
    borderRadius: 18,
    boxShadow: '0 8px 32px rgba(0,121,181,0.15)',
    width: '100%',
    maxWidth: 380,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    animation: 'fadeIn 0.8s',
  },
  logoBox: {
    marginBottom: 18,
    borderRadius: '50%',
    padding: 8,
    boxShadow: '0 2px 8px rgba(0,121,181,0.12)',
  },
  title: {
    fontWeight: 700,
    fontSize: '1.7rem',
    color: '#0079B5',
    marginBottom: 6,
    letterSpacing: 1,
  },
  subtitle: {
    color: '#555',
    fontSize: '1rem',
    marginBottom: 22,
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 18,
  },
  inputGroup: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    background: '#f3f8fc',
    borderRadius: 8,
    border: '1.5px solid #e0e7ef',
    transition: 'border 0.2s',
    boxShadow: '0 1px 2px rgba(0,121,181,0.04)',
  },
  icon: {
    marginLeft: 12,
    marginRight: 6,
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    padding: '14px 12px',
    fontSize: '1rem',
    color: '#222',
    borderRadius: 8,
    transition: 'box-shadow 0.2s',
  },
  showBtn: {
    background: 'none',
    border: 'none',
    fontSize: '1.2rem',
    cursor: 'pointer',
    marginRight: 12,
    outline: 'none',
    color: '#0079B5',
  },
  button: {
    marginTop: 10,
    padding: '14px 0',
    fontSize: '1.1rem',
    fontWeight: 600,
    borderRadius: 8,
    border: 'none',
background: '#0079B5',
    color: '#fff',
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(0,121,181,0.10)',
    transition: 'background 0.2s',
  },
  footer: {
    marginTop: 18,
    textAlign: 'center',
  },
  link: {
    color: '#0079B5',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '0.98rem',
    transition: 'color 0.2s',
  },
  logo: {
    height: 80,
    width: 'auto',
  }
};

export default Login;