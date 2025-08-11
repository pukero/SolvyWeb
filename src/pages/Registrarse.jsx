import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import logo from '../assets/Captura de pantalla 2025-05-23 083352 (1)-Photoroom 5.png';

// Configuración de Supabase
const supabase = createClient('https://pcehdqzgprhhutqunmab.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjZWhkcXpncHJoaHV0cXVubWFiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MDU0NTgyMSwiZXhwIjoyMDY2MTIxODIxfQ.tIUkut8_cI7udPQrAwzsqjeGtf2e69FFMBVrrL2sBOk');

const paises = [
  'Argentina', 'Uruguay', 'Chile', 'Paraguay', 'Bolivia', 'Brasil', 'Perú', 'Otro'
];

const tiposVehiculo = [
  'Auto', 'Moto', 'Bicicleta', 'Camioneta', 'Otro'
];

const allowedImageTypes = [
  'image/jpeg', 'image/png', 'image/jpg', 'image/webp', 'image/gif', 'image/bmp'
];

function validateFiles(file, type) {
  if (!file) return '';
  if (type === 'fotopersonal') {
    if (!allowedImageTypes.includes(file.type)) {
      return 'La foto personal debe ser una imagen (jpg, jpeg, png, webp, gif, bmp).';
    }
  }
  if ((type === 'fotodnifrente' || type === 'fotodnidorso') && !file.type.startsWith('image/')) {
    return 'Las fotos del DNI deben ser imágenes.';
  }
  // certificadoantecedentesp: acepta cualquier tipo
  return '';
}

const initialForm = {
  nombre: '',
  apellido: '',
  dni: '',
  nacionalidad: '',
  telefono: '',
  email: '',
  direccion: '',
  movilidad_propia: false,
  tipo_vehiculo: '',
  fotodnifrente: null,
  fotodnidorso: null,
  fotopersonal: null,
  certificadoantecedentesp: null,
  cuil_o_cuit: '',
  contrasena: '',
  contrasena2: '',
  nombre_usuario: '',
  esta_disponible: false,
  edad: '',
};

const Registrarse = () => {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setForm(prev => ({
        ...prev,
        [name]: checked
      }));
    } else if (type === 'file') {
      setForm(prev => ({
        ...prev,
        [name]: files[0]
      }));
    } else {
      setForm(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const validate = () => {
    if (
      !form.nombre ||
      !form.apellido ||
      !form.dni ||
      !form.nacionalidad ||
      !form.telefono ||
      !form.email ||
      !form.direccion ||
      !form.cuil_o_cuit ||
      !form.contrasena ||
      !form.contrasena2 ||
      !form.nombre_usuario ||
      !form.edad
    ) {
      return 'Todos los campos obligatorios deben estar completos.';
    }
    if (form.contrasena !== form.contrasena2) {
      return 'Las contraseñas no coinciden.';
    }
    // Validación de archivos
    const fileFields = [
      { key: 'fotodnifrente', label: 'Foto DNI Frente' },
      { key: 'fotodnidorso', label: 'Foto DNI Dorso' },
      { key: 'fotopersonal', label: 'Foto Personal' },
      { key: 'certificadoantecedentesp', label: 'Certificado de antecedentes' }
    ];
    for (let { key, label } of fileFields) {
      if (!form[key]) return `Debes subir ${label}.`;
      const fileError = validateFiles(form[key], key);
      if (fileError) return fileError;
    }
    if (form.movilidad_propia && !form.tipo_vehiculo) {
      return 'Selecciona el tipo de vehículo.';
    }
    if (isNaN(Number(form.edad)) || Number(form.edad) < 18) {
      return 'La edad debe ser un número mayor o igual a 18.';
    }
    return '';
  };

  // Subida de archivos a Supabase Storage
  const subirArchivo = async (file, bucket, carpeta) => {
    const nombreFinal = `${carpeta}/${Date.now()}_${file.name}`;
    const { error } = await supabase.storage
      .from(bucket)
      .upload(nombreFinal, file, { contentType: file.type });
    if (error) throw error;
    return `https://pcehdqzgprhhutqunmab.supabase.co/storage/v1/object/public/${bucket}/${nombreFinal}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    setLoading(true);

    try {
      // 1. Subir archivos y obtener URLs
      const urlFrente = await subirArchivo(form.fotodnifrente, 'dni-solver', 'frente');
      const urlDorso = await subirArchivo(form.fotodnidorso, 'dni-solver', 'dorso');
      const urlPerfil = await subirArchivo(form.fotopersonal, 'foto-perfil', '');
      const urlAntecedentes = await subirArchivo(form.certificadoantecedentesp, 'antecedentes-solver', '');

      // 2. Armar el body con URLs
      const body = {
  ...form,
  movilidad_propia: !!form.movilidad_propia,
  esta_disponible: !!form.esta_disponible,
  fotodnifrente: urlFrente,
  fotodnidorso: urlDorso,
  fotopersonal: urlPerfil,
  certificadoantecedentesp: urlAntecedentes,
  contraseña: form.contrasena,
};
delete body.contrasena2;
delete body.contrasena;
      console.log('BODY ENVIADO:', body);
      // 3. Enviar al backend
      const res = await fetch('https://solvy-app-api.vercel.app/sol/solvers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error('Error al registrar. Verifica los datos.');
      setSuccess(true);
      setForm(initialForm);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div style={styles.bg}>
        <div style={styles.card}>
          <h2 style={styles.title}>¡Registro exitoso!</h2>
          <p>Ya podés iniciar sesión.</p>
          <a href="/login" style={styles.button}>Ir a Login</a>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.bg}>
      <div style={styles.card}>
        <img src={logo} alt="Logo" style={styles.logo} />
        <h2 style={styles.title}>Registrarse en Solvy</h2>
        <form style={styles.form} onSubmit={handleSubmit} encType="multipart/form-data">
          <input type="text" name="nombre" placeholder="Nombre *" style={styles.input} value={form.nombre} onChange={handleChange} required />
          <input type="text" name="apellido" placeholder="Apellido *" style={styles.input} value={form.apellido} onChange={handleChange} required />
          <input type="text" name="dni" placeholder="DNI *" style={styles.input} value={form.dni} onChange={handleChange} required />
          <select name="nacionalidad" style={styles.input} value={form.nacionalidad} onChange={handleChange} required>
            <option value="">Seleccioná país *</option>
            {paises.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
          <input type="number" name="edad" placeholder="Edad *" style={styles.input} value={form.edad} onChange={handleChange} min={18} required />
          <input type="text" name="telefono" placeholder="Teléfono *" style={styles.input} value={form.telefono} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email *" style={styles.input} value={form.email} onChange={handleChange} required />
          <input type="text" name="direccion" placeholder="Dirección *" style={styles.input} value={form.direccion} onChange={handleChange} required />
          <input type="text" name="nombre_usuario" placeholder="Nombre de usuario *" style={styles.input} value={form.nombre_usuario} onChange={handleChange} required />
          <input type="text" name="cuil_o_cuit" placeholder="CUIL o CUIT *" style={styles.input} value={form.cuil_o_cuit} onChange={handleChange} required />
          <label style={styles.checkboxLabel}>
            <input type="checkbox" name="movilidad_propia" checked={form.movilidad_propia} onChange={handleChange} style={styles.checkbox} />
            ¿Tenés movilidad propia?
          </label>
          {form.movilidad_propia && (
            <select name="tipo_vehiculo" style={styles.input} value={form.tipo_vehiculo} onChange={handleChange} required>
              <option value="">Seleccioná tipo de vehículo *</option>
              {tiposVehiculo.map(v => <option key={v} value={v}>{v}</option>)}
            </select>
          )}
          <label style={styles.fileLabel}>
            Foto DNI Frente *
            <input type="file" name="fotodnifrente" accept="image/*" style={styles.fileInput} onChange={handleChange} required />
          </label>
          <label style={styles.fileLabel}>
            Foto DNI Dorso *
            <input type="file" name="fotodnidorso" accept="image/*" style={styles.fileInput} onChange={handleChange} required />
          </label>
          <label style={styles.fileLabel}>
            Foto Personal *
            <input type="file" name="fotopersonal" accept="image/*" style={styles.fileInput} onChange={handleChange} required />
          </label>
          <label style={styles.fileLabel}>
            Certificado de antecedentes *
            <input type="file" name="certificadoantecedentesp" accept=".pdf,image/*" style={styles.fileInput} onChange={handleChange} required />
          </label>
          <input type="password" name="contrasena" placeholder="Contraseña *" style={styles.input} value={form.contrasena} onChange={handleChange} required />
          <input type="password" name="contrasena2" placeholder="Repetir contraseña *" style={styles.input} value={form.contrasena2} onChange={handleChange} required />
          <label style={styles.checkboxLabel}>
            <input type="checkbox" name="esta_disponible" checked={form.esta_disponible} onChange={handleChange} style={styles.checkbox} />
            ¿Estás disponible para trabajar?
          </label>
          {error && <div style={{ color: 'red', marginBottom: 10 }}>{error}</div>}
          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? 'Registrando...' : 'Registrarse'}
          </button>
        </form>
        <div style={styles.footer}>
          <a href="/login" style={styles.link}>¿Ya tenés cuenta? Iniciá sesión</a>
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
    justifyContent: 'center',
    textDecoration: 'none',
  },
  link: {
    color: '#0079B5',
    textDecoration: 'underline',
    fontWeight: 500,
    fontSize: '1.1em',
  },
  footer: {
    marginTop: 24,
    textAlign: 'center',
  },
};

export default Registrarse;