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
  width: '100vw',
  overflowX: 'hidden', // evita el scroll horizontal
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
},
form: {
  background: 'none',
  boxShadow: 'none',
  maxWidth: 420, // achica el ancho del formulario para evitar desbordes
  width: '100%',
  margin: '0 auto',
  padding: '0',
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  alignItems: 'center',
},
row: {
  display: 'flex',
  gap: 14,
  width: '100%',
  justifyContent: 'center',
},
inputGroup: {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  alignItems: 'stretch', // no centra, ocupa todo el ancho
  width: '100%',
},
label: {
  fontSize: '0.97rem', // achica la tipografía del label
  color: '#222',
  fontWeight: 500,
  marginBottom: 2,
},
input: {
  padding: '8px',
  fontSize: '0.97rem',
  borderRadius: '8px',
  border: '2px solid #e0f3fc',
  background: '#fff',
  color: '#222',
  outline: 'none',
  transition: 'border-color 0.3s',
  marginBottom: '2px',
  width: '98%', // agranda el largo del input
  boxSizing: 'border-box',
},
textarea: {
  padding: '8px',
  fontSize: '0.97rem',
  borderRadius: '8px',
  border: '2px solid #e0f3fc',
  background: '#fff',
  color: '#222',
  outline: 'none',
  minHeight: 80,
  resize: 'vertical',
  transition: 'border-color 0.3s',
  marginBottom: '2px',
  width: '98%', // agranda el largo del textarea
  boxSizing: 'border-box',
  textAlign: 'left',
},
  privacidadRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    margin: '8px 0 0 0',
  },
  checkbox: {
    width: 22,
    height: 22,
    accentColor: '#0079B5',
  },
  privacidadText: {
    fontSize: '1.05rem',
    color: '#555',
  },
  link: {
    color: '#0079B5',
    textDecoration: 'underline',
  },
  button: {
    marginTop: 18,
    padding: '16px',
    fontSize: '1.18rem',
    borderRadius: '8px',
    border: 'none',
    background: '#3b82f6',
    color: '#fff',
    cursor: 'pointer',
    fontWeight:'700',
    transition: 'background 0.3s',
    width: '100%',
  },
};

export default Contacto;