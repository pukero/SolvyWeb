import React, { useState } from 'react';
import logo from '../assets/Captura de pantalla 2025-05-23 083352 (1)-Photoroom 5.png';

const Login = () => {
  const [form, setForm] = useState({ usuario: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí va la lógica de autenticación
    alert('¡Bienvenido a Solvy!');
  };

  return (
    <div style={styles.bg}>
      <div style={styles.card}>
        <div style={styles.logoBox}>
          
                  <img src={logo} alt="Logo" style={styles.logo} />
                
        </div>
        <h2 style={styles.title}>Bienvenido a Solvy</h2>
        <p style={styles.subtitle}>Inicia sesión para continuar</p>
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <span style={styles.icon}>
              <svg width="20" height="20" fill="#0079B5"><path d="M10 10a4 4 0 100-8 4 4 0 000 8zm0 2c-4.418 0-8 2.239-8 5v1a1 1 0 001 1h14a1 1 0 001-1v-1c0-2.761-3.582-5-8-5z"/></svg>
            </span>
            <input
              type="text"
              name="usuario"
              value={form.usuario}
              onChange={handleChange}
              style={styles.input}
              placeholder="Usuario"
              autoComplete="username"
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <span style={styles.icon}>
              <svg width="20" height="20" fill="#0079B5"><path d="M5 8V6a5 5 0 1110 0v2a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2zm2-2a3 3 0 116 0v2H7V6zm-2 4v6h10v-6H5z"/></svg>
            </span>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              style={styles.input}
              placeholder="Contraseña"
              autoComplete="current-password"
              required
            />
            <button
              type="button"
              style={styles.showBtn}
              onClick={() => setShowPassword(s => !s)}
              tabIndex={-1}
            >
              {showPassword ? '🙈' : '👁️'}
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
    minHeight: '100vh',
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
    background: 'linear-gradient(135deg, #0079B5 60%, #00C6FB 100%)',
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
    background: 'linear-gradient(90deg, #0079B5 60%, #00C6FB 100%)',
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
    height: 50,
    width: 'auto',
  }
};

export default Login;