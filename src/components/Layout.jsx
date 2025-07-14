import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div style={styles.bg}>
      <Header />
      <main style={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const styles = {
  bg: {
    minHeight: '100vh',
    background: '#f6fbfc', // Fondo integrado para toda la web
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: '1',
    padding: '20px',
  },
};

export default Layout;