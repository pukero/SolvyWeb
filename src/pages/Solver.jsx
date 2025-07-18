import React from 'react';

const Solver = () => {
  return (
    <div style={{
      maxWidth: 600,
      margin: '40px auto',
      padding: '32px',
      background: '#fff',
      borderRadius: '18px',
      boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
      textAlign: 'center'
    }}>
      <h1 style={{ color: '#0079B5', fontWeight: 700, fontSize: '2.2rem', marginBottom: 18 }}>Solver</h1>
      <p style={{ fontSize: '1.1rem', color: '#222', marginBottom: 24 }}>
        El Solver es el profesional que realiza el servicio solicitado por el cliente. 
        Cada Solver está especializado en su rubro y se encarga de brindar soluciones rápidas, seguras y de calidad.
      </p>
      <p style={{ fontSize: '1rem', color: '#555' }}>
        ¿Necesitás ayuda? Elegí el servicio y un Solver te contactará para resolverlo.
      </p>
    </div>
  );
};
export default Solver;