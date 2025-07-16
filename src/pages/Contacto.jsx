import React, { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    servicio: '',
    mensaje: '',
  });

  const servicios = ['Limpieza', 'Gasista', 'Plomero', 'Electricista', 'Jardinería','Cocina','Lavado de auto','Mudancero', 'Fumigacion', 'Cerrajeria', 'Instalador', 'Pintor'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se podría manejar el envío del formulario
    alert('Consulta enviada');
    setFormData({
      nombre: '',
      apellido: '',
      servicio: '',
      mensaje: '',
    });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>CONTACTO</h1>
      <hr style={styles.divider} />
      <p style={styles.subtitle}>Contactános</p>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>
          Nombre
          <input
            type="text"
            name="nombre"
            placeholder="Ingrese su nombre"
            value={formData.nombre}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Apellido
          <input
            type="text"
            name="apellido"
            placeholder="Ingrese su apellido"
            value={formData.apellido}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Servicio a consultar
          <select
            name="servicio"
            value={formData.servicio}
            onChange={handleChange}
            style={styles.select}
            required
          >
            <option value="" disabled>Seleccione un servicio</option>
            {servicios.map((servicio) => (
              <option key={servicio} value={servicio}>{servicio}</option>
            ))}
          </select>
        </label>
        <label style={styles.label}>
          Mensaje
          <textarea
            name="mensaje"
            placeholder="Ingrese su mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            style={styles.textarea}
            required
          />
        </label>
        <button type="submit" style={styles.button}>Enviar consulta</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: 600,
    margin: '40px auto',
    padding: 30,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    color: '#0079B5',
  },
  title: {
    fontSize: '2.8rem',
    marginBottom: 10,
    color: '#0079B5',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  divider: {
    border: 'none',
    borderBottom: '3px solid #0079B5',
    marginBottom: 15,
    width: '100%',
    maxWidth: 600,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  subtitle: {
    fontSize: '1.4rem',
    marginBottom: 25,
    color: '#0079B5',
    textAlign: 'center',
    fontWeight: '500',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '1.1rem',
    color: '#0079B5',
    fontWeight: '600',
  },
  input: {
    marginTop: 8,
    padding: 12,
    fontSize: '1.1rem',
    borderRadius: 8,
    border: '2px solid #0079B5',
    backgroundColor: '#fff',
    color: '#333',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  select: {
    marginTop: 8,
    padding: 12,
    fontSize: '1.1rem',
    borderRadius: 8,
    border: '2px solid #0079B5',
    backgroundColor: '#fff',
    color: '#333',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  textarea: {
    marginTop: 8,
    padding: 12,
    fontSize: '1.1rem',
    borderRadius: 8,
    border: '2px solid #0079B5',
    backgroundColor: '#fff',
    color: '#333',
    outline: 'none',
    resize: 'vertical',
    minHeight: 100,
    transition: 'border-color 0.3s',
  },
  button: {
    marginTop: 15,
    padding: 14,
    fontSize: '1.2rem',
    borderRadius: 8,
    border: 'none',
    backgroundColor: '#0079B5',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: '700',
    transition: 'background-color 0.3s',
  },
};

export default Contacto;
