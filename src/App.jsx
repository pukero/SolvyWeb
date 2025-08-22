import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import Contacto from './pages/Contacto';
import Login from './pages/Login';
import Registrarse from './pages/Registrarse';
import Servicios from './pages/Servicios';
import Solver from './pages/Solver'; 
import Perfil from './pages/Perfil';
import MisServicios from './pages/MisServicios';
import SobreNosotros from './pages/SobreNosotros';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="login" element={<Login />} />
          <Route path="registrarse" element={<Registrarse/>} />
          <Route path="servicios" element={<Servicios/>} />
          <Route path="solver" element={<Solver/>} />
          <Route path="perfil" element={<Perfil/>} />
          <Route path="mis-servicios" element={<MisServicios/>} />
          <Route path="sobre-nosotros" element={<SobreNosotros/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
