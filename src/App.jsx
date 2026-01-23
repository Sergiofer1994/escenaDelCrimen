// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer.jsx';
import AvisosLegales from './pages/AvisosLegales.jsx';
import TerminosUso from './pages/TerminosUso.jsx';
import SobreNosotros from './pages/AboutUs.jsx';
import Home from './pages/Home.jsx';
// Importar estilos globales y de layout
import './style/global.css';
import './style/layout.css';
import MovieCarrusel from './components/carrusel/Carrusel.jsx';
import Header from './components/header/Header.jsx';

function App() {
  return (
   <div className="siteWrapper">
      <main className="mainContent">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/avisos-legales" element={<AvisosLegales />} />
          <Route path="/terminos-uso" element={<TerminosUso />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
