import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer.jsx';
import AvisosLegales from './pages/AvisosLegales.jsx';
import TerminosUso from './pages/TerminosUso.jsx';
import SobreNosotros from './pages/AboutUs.jsx';
import Home from './pages/Home.jsx';
import Catalog from "./pages/Catalog";
import Formulario from "./pages/Formulario.jsx";        // ✅ NUEVO: Reemplaza AdminPanel
import PoliticasPrivacidad from './pages/PoliticasDePrivacidad.jsx';
import UbicationPage from './pages/UbicationPage.jsx';
import AddFilmPage from "./pages/AddFilmPage.jsx";

import './style/global.css';
import './style/layout.css';
import MovieCarrusel from './components/carrusel/Carrusel.jsx';
import Header from './components/header/Header.jsx';
function App() {
  return (
    <div className="siteWrapper">
      <Header />
      <main className="mainContent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/avisos-legales" element={<AvisosLegales />} />
          <Route path="/terminos-uso" element={<TerminosUso />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/politicas-de-privacidad" element={<PoliticasPrivacidad />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/addMoviesPage" element={<AddFilmPage />} />
          <Route path="/ubicacion" element={<UbicationPage />} />
          <Route path="/admin" element={<Formulario />} />     {/* ✅ CAMBIADO: AdminPanel → Formulario */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
