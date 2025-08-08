import React, { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    empresa: '',
    email: '',
    telefono: '',
    mensaje: '',
    privacidad: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Consulta enviada');
    setFormData({
      nombre: '',
      apellido: '',
      empresa: '',
      email: '',
      telefono: '',
      mensaje: '',
      privacidad: false,
    });
  };

  return (
    <div style={styles.bg}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h1 style={styles.title}>Contactános</h1>
        <p style={styles.subtitle}>Dejanos tu consulta y te responderemos a la brevedad.</p>
        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Nombre</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Apellido</label>
            <input
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Empresa</label>
          <input
            type="text"
            name="empresa"
            value={formData.empresa}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Teléfono</label>
          <input
            type="text"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            style={styles.input}
            placeholder="Ej: 11-1234-5678"
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Mensaje</label>
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            style={styles.textarea}
            required
          />
        </div>
        <div style={styles.privacidadRow}>
          <input
            type="checkbox"
            name="privacidad"
            checked={formData.privacidad}
            onChange={handleChange}
            style={styles.checkbox}
            required
          />
          <span style={styles.privacidadText}>
            Al seleccionar esto, aceptás nuestra <a href="#" style={styles.link}>política de privacidad</a>.
          </span>
        </div>
        <button type="submit" style={styles.button}>Enviar consulta</button>
      </form>
    </div>
  );
};

const styles = {
  bg: {
    minHeight: '100vh',
    width: '100%',
    maxWidth: '100vw',
    overflowX: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    background: '#f6fbfc',
  },
  form: {
    background: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    width: '100%',
    padding: '40px 30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    boxSizing: 'border-box',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#1d3443',
    textAlign: 'center',
    margin: '0 0 8px 0',
  },
  subtitle: {
    fontSize: '1rem',
    color: '#666',
    textAlign: 'center',
    margin: '0 0 24px 0',
  },
  row: {
    display: 'flex',
    gap: '16px',
    width: '100%',
  },
  inputGroup: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    width: '100%',
  },
  label: {
    fontSize: '0.9rem',
    color: '#333',
    fontWeight: 600,
    marginBottom: '4px',
  },
  input: {
    padding: '12px 16px',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '2px solid #e0f3fc',
    background: '#fff',
    color: '#222',
    outline: 'none',
    transition: 'border-color 0.3s, box-shadow 0.3s',
    width: '100%',
    boxSizing: 'border-box',
  },
  textarea: {
    padding: '12px 16px',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '2px solid #e0f3fc',
    background: '#fff',
    color: '#222',
    outline: 'none',
    minHeight: '100px',
    resize: 'vertical',
    transition: 'border-color 0.3s, box-shadow 0.3s',
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
  },
  privacidadRow: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    margin: '8px 0',
  },
  checkbox: {
    width: '20px',
    height: '20px',
    accentColor: '#0079B5',
    marginTop: '2px',
  },
  privacidadText: {
    fontSize: '0.9rem',
    color: '#666',
    lineHeight: '1.4',
  },
  link: {
    color: '#0079B5',
    textDecoration: 'underline',
  },
  button: {
    marginTop: '8px',
    padding: '16px 24px',
    fontSize: '1.1rem',
    borderRadius: '8px',
    border: 'none',
    background: '#0079B5',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: 600,
    transition: 'background 0.3s, transform 0.2s',
    width: '100%',
  },
};

export default Contacto;