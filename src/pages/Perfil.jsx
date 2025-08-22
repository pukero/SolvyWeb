  // Función para ir a la vista de LogIn

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem('solvyUser');
    window.location.href = '/login'; // Cambia esto si tu ruta de login es diferente
  };


import React, { useEffect, useState, useRef } from 'react';
import avatarDefault from '../assets/avatar-default.svg';
import { supabase } from '../supabaseClient';

const Perfil = () => {
  const [user, setUser] = useState(null);
  const [fotoUrl, setFotoUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const fileInputRef = useRef();

  useEffect(() => {
    const fetchUserData = async () => {
      const stored = localStorage.getItem('solvyUser');
      if (!stored) {
        setUser(null);
        setFotoUrl(null);
        setLoading(false);
        return;
      }

      try {
        const parsed = JSON.parse(stored);
        // Buscar por email o id en la API para traer los datos actualizados
        let apiUser = null;
        if (parsed.email) {
          // Buscar por email
          const res = await fetch(`https://solvy-app-api.vercel.app/sol/solvers/email/${parsed.email}`);
          if (res.ok) {
            apiUser = await res.json();
          }
        } else if (parsed.id) {
          // Buscar por id
          const res = await fetch(`https://solvy-app-api.vercel.app/sol/solvers/id/${parsed.id}`);
          if (res.ok) {
            apiUser = await res.json();
          }
        }
        // Si la API devuelve un array, tomar el primer usuario
        if (Array.isArray(apiUser) && apiUser.length > 0) {
          setUser(apiUser[0]);
          // Foto de perfil
          if (apiUser[0].fotopersonal) {
            if (apiUser[0].fotopersonal.startsWith('http')) {
              setFotoUrl(apiUser[0].fotopersonal);
            } else {
              const { publicURL } = supabase.storage.from('foto-perfil').getPublicUrl(apiUser[0].fotopersonal);
              setFotoUrl(publicURL);
            }
          } else {
            setFotoUrl(null);
          }
        } else if (apiUser) {
          setUser(apiUser);
          if (apiUser.fotopersonal) {
            if (apiUser.fotopersonal.startsWith('http')) {
              setFotoUrl(apiUser.fotopersonal);
            } else {
              const { publicURL } = supabase.storage.from('foto-perfil').getPublicUrl(apiUser.fotopersonal);
              setFotoUrl(publicURL);
            }
          } else {
            setFotoUrl(null);
          }
        } else {
          // Si no hay datos de la API, usar los del localStorage
          setUser(parsed);
          setFotoUrl(null);
        }
      } catch {
        // Si hay error, intentar mostrar los datos del localStorage
        try {
          const parsed = JSON.parse(stored);
          setUser(parsed);
        } catch {
          setUser(null);
        }
        setFotoUrl(null);
      }
      setLoading(false);
    };
    fetchUserData();
  }, []);


  if (loading) {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Mi Perfil</h1>
        <div style={styles.card}>
          <p style={styles.text}>Cargando datos...</p>
        </div>
        <pre style={{fontSize:12, marginTop:16, background:'#eee', padding:8, borderRadius:8}}>
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    );
  }
  if (!user) {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Mi Perfil</h1>
        <div style={styles.card}>
          <p style={styles.text}>No has iniciado sesión.</p>
        </div>
      </div>
    );
  }

  // DEBUG: mostrar el objeto user en consola y en pantalla
  console.log('USER PERFIL:', user);

  // Si el objeto user tiene una propiedad "user", usar esa para mostrar los datos
  const userData = user && user.user ? user.user : user;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Mi Perfil</h1>
      <div style={styles.card}>
        <div style={{marginBottom:18}}>
          <img
            src={
              userData && userData.fotopersonal
                ? (userData.fotopersonal.startsWith('http')
                    ? userData.fotopersonal
                    : supabase.storage.from('foto-perfil').getPublicUrl(userData.fotopersonal).publicURL)
                : avatarDefault
            }
            alt="Foto de perfil"
            style={styles.fotoPerfil}
          />
        </div>  
        <div style={styles.infoGroup}>
          <div style={styles.infoItem}>
            <span style={styles.label}>Nombre:</span> {userData && (userData.nombre || userData.name) ? (userData.nombre || userData.name) : '-'}
          </div>
          <div style={styles.infoItem}>
            <span style={styles.label}>Apellido:</span> {userData && (userData.apellido || userData.lastname) ? (userData.apellido || userData.lastname) : '-'}
          </div>
          <div style={styles.infoItem}>
            <span style={styles.label}>Teléfono:</span> {userData && (userData.telefono || userData.phone) ? (userData.telefono || userData.phone) : '-'}
          </div>
          <div style={styles.infoItem}>
            <span style={styles.label}>Email:</span> {userData && (userData.email) ? userData.email : '-'}
          </div>
        </div>
  <button style={styles.logoutButton} onClick={handleLogout}>Cerrar sesión</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '60vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f7fbfd',
    padding: '40px 0',
  },
  title: {
    fontSize: '2.2rem',
    color: '#0079B5',
    marginBottom: 24,
    fontWeight: 700,
  },
  card: {
    background: '#fff',
    borderRadius: 16,
    boxShadow: '0 2px 16px #0079B522',
    padding: 32,
    minWidth: 320,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 18,
  },
  fotoPerfil: {
    width: 90,
    height: 90,
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: 18,
    border: '2.5px solid #0079B5',
    boxShadow: '0 2px 8px #0079B522',
  },
  infoGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    width: '100%',
    alignItems: 'flex-start',
    marginTop: 8,
  },
  infoItem: {
    fontSize: '1.08rem',
    color: '#222',
    background: '#f3f8fc',
    borderRadius: 8,
    padding: '8px 16px',
    width: '100%',
    fontWeight: 500,
  },
  label: {
    color: '#0079B5',
    fontWeight: 700,
    marginRight: 8,
  },

  logoutButton: {
    marginTop: 24,
    padding: '10px 28px',
    background: '#ff0000ff',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    fontSize: '1.08rem',
    fontWeight: 600,
    cursor: 'pointer',
    boxShadow: '0 2px 8px #0079B522',
    transition: 'background 0.2s',
  },
  uploadBtn: {
    position: 'absolute',
    bottom: -10,
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#0079B5',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    fontSize: '0.95rem',
    fontWeight: 500,
    padding: '6px 16px',
    cursor: 'pointer',
    boxShadow: '0 2px 8px #0079B522',
    transition: 'background 0.2s',
    zIndex: 2,
  },
};
export default Perfil;
