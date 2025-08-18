import React from 'react';
import iPhoneMockup from '../assets/iPhoneMockup.png';
import mudanzaImg from '../assets/mudanza.jpg';
import groupImg from '../assets/Group.png'; // <-- Agrega esto
import MiPerfil from '../assets/Miperfil.png'
const icons = [
  (
    <svg width="38" height="38" fill="none" viewBox="0 0 24 24">
      <path fill="#0079B5" d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5Z"/>
    </svg>
  ),
  (
    <svg width="38" height="38" fill="none" viewBox="0 0 24 24">
      <rect x="3" y="5" width="18" height="14" rx="2" fill="#0079B5"/>
      <rect x="7" y="17" width="10" height="2" rx="1" fill="#fff"/>
    </svg>
  ),
  (
    <svg width="38" height="38" fill="none" viewBox="0 0 24 24">
      <path fill="#0079B5" d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>
  ),
  (
    <svg width="38" height="38" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="#0079B5"/>
      <rect x="7" y="11" width="10" height="2" rx="1" fill="#fff"/>
      <rect x="11" y="7" width="2" height="10" rx="1" fill="#fff"/>
    </svg>
  ),
];

const Solver = () => {
  return (
    <div style={styles.pageBg}>
      {/* Título principal */}
      <h1 style={styles.title}>Solver</h1>

        {/* Ilustración y mensaje principal en un solo recuadro */}
      <div style={styles.heroContainer}>
        <img
          src={MiPerfil}
          alt="Solver trabajando"
          style={styles.heroImg}
        />
        <div style={styles.heroTextBox}>
          <h2 style={styles.heroTitle}>¿Por qué ser Solver en Solvy?</h2>
          <ul style={styles.heroList}>
            <li>
              <b>Crecé profesionalmente:</b> Accedé a una comunidad activa y hacé crecer tu red de clientes.
            </li>
            <li>
              <b>Flexibilidad total:</b> Elegí cuándo y cómo trabajar, gestionando tus servicios desde cualquier dispositivo.
            </li>
            <li>
              <b>Pagos seguros:</b> Recibí tus cobros de manera rápida y protegida, sin complicaciones.
            </li>
            <li>
              <b>Soporte y visibilidad:</b> Te acompañamos en cada paso y potenciamos tu perfil para que más personas te encuentren.
            </li>
          </ul>
        </div>
      </div>

      {/* Beneficios destacados con íconos propios */}
      <div style={styles.benefitsRow}>
        <div style={styles.benefitCard}>
          <span style={styles.benefitIcon}>{icons[0]}</span>
          <div style={styles.benefitTitle}>Red de clientes en crecimiento</div>
          <div style={styles.benefitText}>Accedé a cientos de personas que buscan soluciones todos los días.</div>
        </div>
        <div style={styles.benefitCard}>
          <span style={styles.benefitIcon}>{icons[1]}</span>
          <div style={styles.benefitTitle}>Herramientas digitales</div>
          <div style={styles.benefitText}>Gestioná tus servicios, cobros y agenda desde cualquier dispositivo.</div>
        </div>
        <div style={styles.benefitCard}>
          <span style={styles.benefitIcon}>{icons[2]}</span>
          <div style={styles.benefitTitle}>Impulsá tu reputación</div>
          <div style={styles.benefitText}>Recibí valoraciones y hacé crecer tu perfil profesional.</div>
        </div>
        <div style={styles.benefitCard}>
          <span style={styles.benefitIcon}>{icons[3]}</span>
          <div style={styles.benefitTitle}>Soporte dedicado</div>
          <div style={styles.benefitText}>Te acompañamos en cada paso para que tu experiencia sea la mejor.</div>
        </div>
      </div>

      {/* Ejemplo visual de un servicio */}
      <section style={styles.exampleSection}>
        <div style={styles.exampleImgBox}>
          <img src={mudanzaImg} alt="Ejemplo de servicio de mudanza" style={styles.exampleImg} />
        </div>
        <div style={styles.exampleTextBox}>
          <h2 style={styles.exampleTitle}>Ejemplo real: Servicio de Mudanza</h2>
          <p style={styles.exampleText}>
            Juan es un <b>Solver</b> especializado en mudanzas. Gracias a Solvy, pudo conectar con clientes de su ciudad, organizar sus trabajos desde el celular y recibir pagos seguros. 
            <br /><br />
            <span style={{color: "#0079B5", fontWeight: 600}}>¿Tenés una habilidad o servicio para ofrecer?</span> Unite como Solver y empezá a trabajar de manera independiente, con el respaldo y la visibilidad que te da Solvy.
          </p>
        </div>
      </section>

      {/* Sección de app móvil */}
      <section style={styles.appSection}>
        <div style={styles.appInfo}>
          <h2 style={styles.appTitle}>¡Llevá Solvy a todos lados!</h2>
          <p style={styles.appText}>
            Nuestra plataforma también está pensada para usarse desde tu celular. Gestioná tus servicios, respondé a tus clientes y recibí notificaciones en tiempo real, estés donde estés.
          </p>
          <ul style={styles.appList}>
            <li>✔️ Fácil de usar desde cualquier dispositivo</li>
            <li>✔️ Notificaciones instantáneas</li>
            <li>✔️ Todo tu trabajo organizado en un solo lugar</li>
          </ul>
        </div>
        <div style={styles.appImageBox}>
          <img src={iPhoneMockup} alt="Vista móvil de Solvy" style={styles.appImage} />
        </div>
      </section>
    </div>
  );
};

const styles = {
  pageBg: {
    background: '#f6fbfc',
    minHeight: '100vh',
    width: '100%',
  },
  title: {
    color: '#0079B5',
    fontWeight: 700,
    fontSize: '4rem',
    marginTop: 24,
    marginBottom: 30,
    textTransform: 'uppercase',
    textAlign: 'center',
    letterSpacing: 1,
  },
  heroContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 36,
    background: '#eaf6ff',
    borderRadius: 28,
    boxShadow: '0 4px 24px #b6d6f722',
    padding: '36px 5vw',
    margin: '0 auto 36px auto',
    maxWidth: 950,
    flexWrap: 'wrap',
  },
  heroRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 48,
    maxWidth: 1100,
    margin: '0 auto 36px auto',
    flexWrap: 'wrap',
  },
    heroImg: {
    width: 180,
    maxWidth: '60vw',
    height: 'auto',
    borderRadius: 24,
    background: '#e0f3fc',
    boxShadow: '0 4px 24px #e0e7ef22',
  },
    heroTextBox: {
    minWidth: 260,
    maxWidth: 420,
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  heroTitle: {
    fontSize: '2rem',
    color: '#1d3443',
    fontWeight: 700,
    marginBottom: 18,
  },
  heroText: {
    fontSize: '1.18rem',
    color: '#37474F',
    marginBottom: 0,
    lineHeight: 1.6,
  },
  benefitsRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: 32,
    margin: '40px auto 40px auto',
    flexWrap: 'wrap',
    maxWidth: 1100,
  },
  benefitCard: {
    background: '#fff',
    borderRadius: 18,
    padding: '28px 22px',
    minWidth: 210,
    maxWidth: 260,
    boxShadow: '0 4px 24px #e0e7ef22',
    textAlign: 'center',
    flex: 1,
    margin: '0 8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  benefitIcon: {
    fontSize: '2.2rem',
    color: '#0079B5',
    marginBottom: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 38,
  },
  benefitTitle: {
    fontWeight: 700,
    fontSize: '1.08rem',
    color: '#1d3443',
    marginBottom: 6,
  },
  benefitText: {
    fontSize: '1rem',
    color: '#37474F',
    lineHeight: 1.5,
  },
  exampleSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 48,
    background: '#fff',
    borderRadius: 28,
    boxShadow: '0 4px 24px #e0e7ef22',
    padding: '40px 5vw',
    margin: '40px auto',
    maxWidth: 1100,
    flexWrap: 'wrap',
  },
  exampleImgBox: {
    flex: 1,
    minWidth: 260,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  exampleImg: {
    width: 320,
    maxWidth: '90vw',
    height: 'auto',
    borderRadius: 18,
    objectFit: 'cover',
    boxShadow: '0 2px 12px #e0e7ef22',
  },
  exampleTextBox: {
    flex: 1.2,
    minWidth: 260,
    maxWidth: 480,
    textAlign: 'left',
  },
  exampleTitle: {
    fontSize: '1.5rem',
    color: '#0079B5',
    fontWeight: 700,
    marginBottom: 14,
  },
  exampleText: {
    fontSize: '1.13rem',
    color: '#37474F',
    marginBottom: 0,
    lineHeight: 1.7,
  },
  appSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 60,
    background: '#fff',
    padding: '50px 5vw 60px 5vw',
    margin: '40px auto 0 auto',
    borderRadius: 28,
    boxShadow: '0 4px 24px #e0e7ef22',
    maxWidth: 1100,
    flexWrap: 'wrap',
  },
  appImageBox: {
    flex: 1,
    minWidth: 320,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appImage: {
    width: 500,
    height: 'auto',
    objectFit: 'contain',
    borderRadius: 36,
    background: '#f6fbfc',
    boxShadow: 'none',
  },
  appInfo: {
    flex: 1.2,
    minWidth: 280,
    maxWidth: 480,
    textAlign: 'left',
  },
  appTitle: {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#1d3443',
    marginBottom: 18,
  },
  appText: {
    fontSize: '1.13rem',
    color: '#37474F',
    marginBottom: 18,
    lineHeight: 1.6,
  },
  appList: {
    fontSize: '1.08rem',
    color: '#0079B5',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    lineHeight: 2,
    fontWeight: 500,
  },
  heroTextBox: {
    minWidth: 260,
    maxWidth: 420,
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  heroTitle: {
    fontSize: '2rem',
    color: '#1d3443',
    fontWeight: 700,
    marginBottom: 18,
  },
  
};

export default Solver;