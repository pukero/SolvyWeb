import React, { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    servicio: '',
    mensaje: '',
  });

  const servicios = ['Limpieza', 'Gasista', 'Plomero', 'Electricista', 'Jardinería'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se podría manejar el envío del formulario
    alert('Consulta enviada');
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
          <input
            type="text"
            name="mensaje"
            placeholder="Ingrese su mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            style={styles.input}
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
    margin: '0 auto',
    padding: 20,
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: 10,
    color: '#000000',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  divider: {
    border: 'none',
    borderBottom: '2px solid #000000',
    marginBottom: 10,
    width: '100%',
    maxWidth: 600,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: 20,
    color: '#000000',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '1rem',
    color: '#000000',
  },
  input: {
    marginTop: 5,
    padding: 8,
    fontSize: '1.2rem',
    borderRadius: 4,
    border: '1px solid #0079B5',
    backgroundColor: '#0079B5',
    color: '#000000',
  },
  select: {
    marginTop: 5,
    padding: 8,
    fontSize: '1.2rem',
    borderRadius: 4,
    border: '1px solid #0079B5',
    backgroundColor: '#0079B5',
    color: '#000000',
  },
  button: {
    marginTop: 10,
    padding: 12,
    fontSize: '1rem',
    borderRadius: 4,
    border: 'none',
    backgroundColor: '#000000',
    color: '#FFFFFF',
    cursor: 'pointer',
  },
};

export default Contacto;
