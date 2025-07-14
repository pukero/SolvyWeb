import React from 'react';

const LandingPage = () => {
  return (
    <div style={styles.bg}>
      <main style={styles.main}>
        <section style={styles.left}>
          <h1 style={styles.title}>
          Ofrecé tu servicio <br/>
          Ganás por hacerlo<br/>
          Elegís cuándo trabajar
          </h1>
          <p style={styles.subtitle}>
            Ayudamos a trabajadores independientes a encontrar clientes, organizar sus servicios y ganar por cada trabajo.          </p>
          <form style={styles.form}>
            <input
              type="email"
              placeholder="Tu email"
              style={styles.input}
            />
            <button type="submit" style={styles.ctaBtn}>
              Empezar 
            </button>
          </form>
            <span style={styles.trustedBy}>Cientos de oficios, una sola app.</span>
         
        </section>
        <section style={styles.right}>
          <div style={styles.imagesContainer}>
            <img
              src="/src/assets/image 5.png"
              alt="Persona haciendo servicio 1"
              style={styles.imgMain}
            />
            <img
              src="/src/assets/Que-habilidades-debe-tener-un-electricista 1 (1).png"
              alt="Persona haciendo servicio 2"
              style={styles.imgOverlap}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

const styles = {
  bg: {
    background: '#f6fbfc',
    minHeight: '100vh',
    fontFamily: "'Poppins', 'Segoe UI', Arial, sans-serif"
  },
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '48px 5vw 0 5vw',
    gap: '5vw'
  },
  left: {
    flex: 1.3,
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
  },
  title: {
    fontSize: '3.1rem',
    fontWeight: 700,
    color: '#1d3443',
    lineHeight: 1.11,
    marginBottom: 6,
    marginTop: 28
  },
  subtitle: {
    fontSize: '1.13rem',
    color: '#37474F',
    marginBottom: 18,
    maxWidth: 430
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    background: '#fff',
    borderRadius: 20,
    padding: '6px 8px 6px 18px',
    boxShadow: '0 4px 24px #e0e7ef33',
    gap: 12,
    maxWidth: 370
  },
  input: {
    flex: 1,
    padding: '14px 12px',
    fontSize: '1.04rem',
    borderRadius: 14,
    border: 'none',
    outline: 'none',
    background: '#f6fbfc',
    color: '#222',
    fontWeight: 500,
    fontFamily: "'Poppins', 'Segoe UI', Arial, sans-serif",

  },
  ctaBtn: {
    padding: '13px 30px',
    background: '#0079B5',
    color: '#fff',
    borderRadius: 14,
    border: 'none',
    fontWeight: 700,
    fontSize: '1.08rem',
    cursor: 'pointer',
    boxShadow: '0 2px 10px #0079B533',
    display: 'flex',
    alignItems: 'center',
    gap: 7,
  },
  arrow: {
    fontSize: '1.3em',
    fontWeight: 700
  },
  trusted: {
    display: 'flex',
    alignItems: 'center',
    gap: 25,
    marginTop: 22,
  },
  trustedBy: {
    fontWeight: 600,
    fontSize: '1.09rem',
    color: '#90A4AE'
  },
  partnerLogo: {
    height: 28,
    width: 'auto',
    filter: 'grayscale(1) brightness(0.22)'
  },
  right: {
    flex: 1,
    position: 'relative',
    minWidth: 350,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 370,
  },
  imagesContainer: {
    position: 'relative',
    width: 440,
    height: 380,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgMain: {
    position: 'absolute',
    top: 240,
    right: 100,
    width: 820,
    height: 'auto',
    borderRadius: 28,
    boxShadow: '0 12px 40px #0079B510',
    zIndex: 1,
    objectFit: 'cover',
  },
  imgOverlap: {
    position: 'absolute',
    top: -100,
    right: -230,
    width: 820,
    height: 'auto',
    borderRadius: 22,
    boxShadow: '0 6px 22px #2ca3c72a',
    zIndex: 2,
    objectFit: 'cover',
  }
};

export default LandingPage;