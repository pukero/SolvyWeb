import React, { useState } from 'react';
import logo from '../assets/Captura de pantalla 2025-05-23 083352 (1)-Photoroom 5.png';

const Registrarse = () => {
  const [paso, setPaso] = useState(1);

  return (
    <div style={styles.bg}>
      <div style={styles.card}>
        <img src={logo} alt="Logo" style={styles.logo} />
        <h2 style={styles.title}>Registrarse en Solvy</h2>
        <form style={styles.form}>
          {paso === 1 && (
            <div style={styles.grid}>
              <input type="text" name="nombre" placeholder="Nombre" style={styles.input} />
              <input type="text" name="apellido" placeholder="Apellido" style={styles.input} />
              <input type="text" name="dni" placeholder="DNI" style={styles.input} />
              <input type="text" name="nacionalidad" placeholder="Nacionalidad" style={styles.input} />
              <input type="text" name="telefono" placeholder="Teléfono" style={styles.input} />
              <input type="email" name="email" placeholder="Email" style={styles.input} />
              <input type="text" name="direccion" placeholder="Dirección" style={styles.inputFull} />
              <div style={styles.checkboxRow}>
                <label style={styles.checkboxLabel}>
                  <input type="checkbox" name="movilidad_propia" style={styles.checkbox} />
                  ¿Tenés movilidad propia?
                </label>
                <input type="text" name="tipo_vehiculo" placeholder="Tipo de vehículo" style={styles.input} />
              </div>
              <input type="text" name="cuil_o_cuit" placeholder="CUIL o CUIT" style={styles.inputFull} />
            </div>
          )}
          {paso === 2 && (
            <div style={styles.fileGrid}>
              <label style={styles.fileLabel}>
                Foto DNI Frente
                <input type="file" name="fotodnifrente" accept="image/*" style={styles.fileInput} />
              </label>
              <label style={styles.fileLabel}>
                Foto DNI Dorso
                <input type="file" name="fotodnidorso" accept="image/*" style={styles.fileInput} />
              </label>
              <label style={styles.fileLabel}>
                Foto Personal
                <input type="file" name="fotopersonal" accept="image/*" style={styles.fileInput} />
              </label>
              <label style={styles.fileLabel}>
                Certificado de Antecedentes
                <input type="file" name="certificadoantecedentes" accept="application/pdf,image/*" style={styles.fileInput} />
              </label>
            </div>
          )}
          <div style={styles.actions}>
            {paso === 1 && (
              <button
                type="button"
                style={styles.nextButton}
                onClick={() => setPaso(2)}
              >
                Siguiente <span style={styles.arrow}>&rarr;</span>
              </button>
            )}
            {paso === 2 && (
              <>
                <button
                  type="button"
                  style={styles.backButton}
                  onClick={() => setPaso(1)}
                >
                  <span style={styles.arrow}>&larr;</span> Atrás
                </button>
                <button type="button" style={styles.button}>
                  Registrarse
                </button>
              </>
            )}
          </div>
        </form>
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
    padding: '56px 56px',
    borderRadius: 28,
    boxShadow: '0 16px 48px rgba(0,121,181,0.20)',
    width: '100%',
    maxWidth: 1080,
    minWidth: 420,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    animation: 'fadeIn 0.8s',
    border: '1.5px solid #e0e7ef',
  },
  logo: {
    height: 90,
    width: 'auto',
    marginBottom: 18,
    filter: 'drop-shadow(0 2px 8px #0079B533)',
  },
  title: {
    fontWeight: 500,
    fontSize: '2rem',
    color: '#0079B5',
    marginBottom: 42,
    letterSpacing: 1,
    textShadow: '0 2px 8px #e0e7ef',
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 28,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 22,
    marginBottom: 12,
  },
  input: {
    border: 'none',
    outline: 'none',
    background: '#f3f8fc',
    padding: '15px 14px',
    fontSize: '1.05rem',
    color: '#222',
    borderRadius: 12,
    transition: 'box-shadow 0.2s, border 0.2s',
    marginBottom: 0,
    width: '100%',
    boxShadow: '0 2px 8px #e0e7ef33',
  },
  inputFull: {
    gridColumn: '1 / span 2',
    outline: 'none',
    background: '#f3f8fc',
    padding: '15px 14px',
    fontSize: '1.05rem',
    color: '#222',
    borderRadius: 12,
    border: '2px solid #e0e7ef',
    transition: 'box-shadow 0.2s, border 0.2s',
    marginBottom: 0,
    width: '100%',
    boxShadow: '0 2px 8px #e0e7ef33',
  },
  checkboxRow: {
    gridColumn: '1 / span 2',
    display: 'flex',
    alignItems: 'center',
    gap: 22,
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    fontSize: '1.15rem',
    color: '#0079B5',
    fontWeight: 600,
    marginRight: 12,
  },
  checkbox: {
    accentColor: '#0079B5',
    width: 22,
    height: 22,
  },
  fileGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 22,
    marginBottom: 0,
  },
  fileLabel: {
    fontSize: '1.08rem',
    color: '#0079B5',
    fontWeight: 600,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  fileInput: {
    marginTop: 2,
    border: 'none',
    background: '#f3f8fc',
    borderRadius: 10,
    padding: '10px 0',
    fontSize: '1.08rem',
    boxShadow: '0 2px 8px #e0e7ef33',
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 18,
    marginTop: 24,
  },
   nextButton: {
    padding: '14px 32px',
    fontSize: '1.15rem',
    fontWeight: 700,
    borderRadius: 10,
    border: 'none',
    background: '#0079B5', 
    color: '#fff',
    cursor: 'pointer',
    boxShadow: '0 2px 12px rgba(0,121,181,0.12)',
    transition: 'background 0.2s',
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
  backButton: {
    padding: '14px 32px',
    fontSize: '1.15rem',
    fontWeight: 700,
    borderRadius: 10,
    border: 'none',
    background: '#e0e7ef',
    color: '#0079B5',
    cursor: 'pointer',
    boxShadow: '0 2px 12px rgba(0,121,181,0.08)',
    transition: 'background 0.2s',
    letterSpacing: 1,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
  button: {
    padding: '14px 32px',
    fontSize: '1.15rem',
    fontWeight: 700,
    borderRadius: 10,
    border: 'none',
    background: '#0079B5', 
    color: '#fff',
    boxShadow: '0 2px 12px rgba(0,121,181,0.12)',
    transition: 'background 0.2s',
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
  arrow: {
    fontSize: '1.3em',
    fontWeight: 700,
  },
};

export default Registrarse;