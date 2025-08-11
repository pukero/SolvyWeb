import React from 'react';
import img1 from '../assets/Que-habilidades-debe-tener-un-electricista 1 (1).png';
import img2 from '../assets/image 4.png';
import img3 from '../assets/image 5.png';
import img4 from '../assets/Slide Image.png';
import img5 from '../assets/Slide Item — 2.png';
import logo from '../assets/Captura de pantalla 2025-05-23 083352 (1)-Photoroom 5.png';
import iPhoneMockup from '../assets/iPhoneMockup.png';
const LandingPage = () => {
  return (
    <div style={styles.bg}>
      <main style={styles.main}>
        <section style={styles.left}>
          <h1 style={styles.title}>
          Ofrecé tu servicio <br/>
          Ganá por hacerlo<br/>
          Elegí cuando trabajar
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
        {/* Nueva sección horizontal debajo del main */}
      <section style={styles.howItWorksSection}>
        <h2 style={styles.howItWorksTitle}>¿Cómo funciona?</h2>
        <div style={styles.stepsContainer}>
          <div style={styles.step}>
            <span style={styles.stepNumber}>1</span>
            <h3 style={styles.stepTitle}>Registrate gratis</h3>
            <p style={styles.stepDesc}>Crea tu cuenta en minutos y completá tu perfil profesional.</p>
          </div>
          <div style={styles.step}>
            <span style={styles.stepNumber}>2</span>
            <h3 style={styles.stepTitle}>Publicá tus servicios</h3>
            <p style={styles.stepDesc}>Mostrá lo que sabés hacer y empezá a recibir solicitudes de clientes.</p>
          </div>
          <div style={styles.step}>
            <span style={styles.stepNumber}>3</span>
            <h3 style={styles.stepTitle}>Ganá por cada trabajo</h3>
            <p style={styles.stepDesc}>Elegí cuándo trabajar y cobrá por cada servicio realizado.</p>
          </div>
        </div>
      </section>
     {/* Nueva sección de categorías populares */}
       <section style={styles.categoriesSection}>
        <h2 style={styles.categoriesTitle}>Servicios más buscados</h2>
        <div style={styles.categoriesContainer}>
          <div style={styles.categoryCard}>
            <img
              src={img1}
              alt="Electricista"
              style={styles.categoryImg}
            />
            <span style={styles.categoryName}>Electricista</span>
          </div>
          <div style={styles.categoryCard}>
            <img
              src={img2}
              alt="Plomero"
              style={styles.categoryImg}
            />
            <span style={styles.categoryName}>Plomero</span>
          </div>
          <div style={styles.categoryCard}>
            <img
              src={img3}
              alt="Instalador"
              style={styles.categoryImg}
            />
            <span style={styles.categoryName}>Instalador</span>
          </div>
          <div style={styles.categoryCard}>
            <img
              src={img4}
              alt="Pintor"
              style={styles.categoryImg}
            />
            <span style={styles.categoryName}>Pintor</span>
          </div>
          <div style={styles.categoryCard}>
            <img
              src={img5}
              alt="Mudancero"
              style={styles.categoryImg}
            />
            <span style={styles.categoryName}>Mudancero</span>
          </div>
        </div>
      </section>
    
      {/* Sección de presentación institucional */}
      <section style={styles.presentationSection}>
        <div style={styles.presentationText}>
          <h2 style={styles.presentationTitle}>CONOCÉ SOLVY</h2>
          <p style={styles.presentationParagraph}>
            Somos Solvy, una plataforma creada por alumnos de 5to año de Informática de ORT. Nuestro objetivo es conectar trabajadores independientes con clientes, facilitando el acceso a servicios de calidad y brindando oportunidades de crecimiento profesional.
          </p>
          <p style={styles.presentationParagraph}>
            Creemos en la tecnología como motor de inclusión y progreso. Por eso, desarrollamos una solución simple, segura y eficiente para que puedas ofrecer tus servicios, encontrar nuevos clientes y gestionar tu trabajo de manera profesional.
          </p>
          <p style={styles.presentationParagraph}>
            Sumate a Solvy y formá parte de una comunidad que valora el esfuerzo, la confianza y la innovación.
          </p>
        </div>
        <div style={styles.presentationImageBox}>
          <img src={logo} alt="Logo Solvy" style={styles.presentationLogo} />
          <div style={styles.presentationBox}>
            <h3 style={styles.presentationBoxTitle}>Sobre Nosotros</h3>
            <p style={styles.presentationBoxText}>
              Somos un equipo joven, apasionado por la tecnología y el impacto social. Creamos Solvy como proyecto final de nuestra formación en ORT, con la visión de ayudar a miles de personas a crecer con su trabajo.
            </p>
          </div>
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
    justifyContent: 'center',
    padding: '32px 2vw 0 2vw',
    gap: '4vw',
    flexWrap: 'wrap', // Permite que las columnas bajen en pantallas chicas
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
    fontSize: '1.01rem',
    borderRadius: 12,
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
    borderRadius: 12,
    border: 'none',
    fontWeight: 700,
    fontSize: '1.01rem',
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
  },
  howItWorksSection: {
    background: '#fff',
    padding: '60px 5vw 60px 5vw',
    marginTop: 200, // Antes: 300
    textAlign: 'center',
  },
  howItWorksTitle: {
    fontSize: '2.2rem',
    fontWeight: 700,
    color: '#1d3443',
    marginBottom: 38,
  },
  stepsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: 50,
    flexWrap: 'wrap',
  },
  step: {
    background: '#f6fbfc',
    borderRadius: 18,
    padding: '32px 28px',
    maxWidth: 300,
    boxShadow: '0 4px 24px #e0e7ef22',
    textAlign: 'center',
  },
  stepNumber: {
    display: 'inline-block',
    background: '#0079B5',
    color: '#fff',
    borderRadius: '50%',
    width: 38,
    height: 38,
    lineHeight: '38px',
    fontWeight: 700,
    fontSize: '1.3rem',
    marginBottom: 12,
  },
  stepTitle: {
    fontSize: '1.18rem',
    fontWeight: 600,
    color: '#1d3443',
    marginBottom: 8,
  },
  stepDesc: {
    fontSize: '1rem',
    color: '#37474F',
  },
  '@media (max-width: 1200px)': {
    main: {
      flexDirection: 'column',
      alignItems: 'center',
      gap: 40,
      padding: '32px 3vw 0 3vw',
    },
    right: {
      minWidth: 'unset',
      width: '100%',
      minHeight: 260,
      marginTop: 32,
      justifyContent: 'center',
    },
    imagesContainer: {
      width: '100%',
      maxWidth: 420,
      height: 260,
      minWidth: 0,
    },
    imgMain: {
      position: 'relative',
      top: 40,
      right: 0,
      width: '90vw',
      maxWidth: 320,
      minWidth: 180,
    },
    imgOverlap: {
      position: 'relative',
      top: -40,
      right: 0,
      width: '90vw',
      maxWidth: 320,
      minWidth: 180,
    },
    howItWorksSection: {
      marginTop: 80,
      padding: '40px 3vw',
    },
    stepsContainer: {
      gap: 30,
    },
  },
  '@media (max-width: 700px)': {
    main: {
      flexDirection: 'column',
      alignItems: 'center',
      gap: 24,
      padding: '18px 2vw 0 2vw',
    },
    left: {
      gap: 14,
    },
    title: {
      fontSize: '1.6rem',
    },
    subtitle: {
      fontSize: '0.98rem',
      maxWidth: '100%',
    },
    form: {
      maxWidth: '100%',
      flexDirection: 'column',
      gap: 8,
      padding: '6px',
    },
    ctaBtn: {
      width: '100%',
      justifyContent: 'center',
    },
    right: {
      minHeight: 120,
      marginTop: 16,
    },
    imagesContainer: {
      width: '100%',
      maxWidth: 200,
      height: 110,
      minWidth: 0,
    },
    imgMain: {
      width: '90vw',
      maxWidth: 120,
      minWidth: 80,
      top: 18,
    },
    imgOverlap: {
      width: '90vw',
      maxWidth: 120,
      minWidth: 80,
      top: -18,
    },
    howItWorksSection: {
      marginTop: 40,
      padding: '18px 2vw',
    },
    howItWorksTitle: {
      fontSize: '1.1rem',
    },
    stepsContainer: {
      gap: 10,
    },
    step: {
      padding: '12px 4px',
      maxWidth: '98%',
    },
  },
       categoriesSection: {
    background: '#f6fbfc',
    padding: '40px 5vw 60px 5vw', // Antes: '60px 5vw 60px 5vw'
    marginTop: 0,
    textAlign: 'center',
  },
  categoriesTitle: {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#1d3443',
    marginBottom: 50,
  },
  categoriesContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: 40,
    flexWrap: 'wrap',
  },
 categoryCard: {
    background: '#fff',
    borderRadius: '50%',
    padding: 0,
    width: 210,
    height: 210,
    boxShadow: '0 4px 24px #e0e7ef22',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'center',
    margin: '16px',
    overflow: 'hidden',
  },
  categoryImg: {
    width: 160,
    height: 160,
    objectFit: 'cover',
    borderRadius: '50%',
    marginBottom: 8,
    boxShadow: '0 2px 8px #0079B522',
  },
  categoryName: {
    fontWeight: 600,
    color: '#0079B5',
    fontSize: '1.12rem',
    marginTop: 5,
  },
    presentationSection: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 48,
    background: '#f6fbfc',
    padding: '60px 5vw 60px 5vw',
    marginTop: 60,
    flexWrap: 'wrap',
  },
  presentationText: {
    flex: 2,
    minWidth: 280,
    maxWidth: 600,
  },
  presentationTitle: {
    fontSize: '2.3rem',
    fontWeight: 700,
    color: '#1d3443',
    marginBottom: 24,
    letterSpacing: 1,
  },
  presentationParagraph: {
    fontSize: '1.13rem',
    color: '#37474F',
    marginBottom: 18,
    lineHeight: 1.6,
  },
  presentationImageBox: {
    flex: 1.2,
    minWidth: 320,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 24,
  },
   presentationLogo: {
    width: 180,
    height: 180,
    objectFit: 'contain',
    borderRadius: '50%',
    background: '#fff',
    marginBottom: 12,
    border: '2px solid #0079B5', 
    boxSizing: 'border-box',
  },
  presentationBox: {
    background: ' #0079B5',
    borderRadius: 18,
    padding: '32px 28px',
    color: '#fff',
    boxShadow: '0 4px 24px #0079B522',
    width: '100%',
    maxWidth: 340,
    textAlign: 'left',
    marginBottom: 60
  },
  presentationBoxTitle: {
    fontSize: '1.35rem',
    fontWeight: 700,
    marginBottom: 12,
    color: '#fff',
  },
  presentationBoxText: {
    fontSize: '1.05rem',
    color: '#e0f7fa',
    lineHeight: 1.5,
  },  
appSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 48,
    background: '#fff',
    padding: '60px 5vw 60px 5vw',
    marginTop: 0,
    flexWrap: 'wrap',
  },
  appInfo: {
    flex: 2,
    minWidth: 260,
    maxWidth: 540,
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
  appImageBox: {
    flex: 1.2,
    minWidth: 220,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appImage: {
    width: 220,
    height: 'auto',
    objectFit: 'contain',
    boxShadow: '0 8px 32px #0079B533',
    borderRadius: 32,
    background: '#f6fbfc',
  },
};

export default LandingPage;