// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer.jsx';
import AvisosLegales from './pages/AvisosLegales.jsx';
import TerminosUso from './pages/TerminosUso.jsx';
import SobreNosotros from './pages/AboutUs.jsx';
import Home from './pages/Home.jsx';
import Catalog from "./pages/Catalog.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";
import PoliticasPrivacidad from './pages/PoliticasDePrivacidad.jsx';
import UbicationPage from './pages/UbicationPage.jsx';
import CatalogPage from './pages/CatalogPage.jsx';


// Importar estilos globales y de layout
import './style/global.css';
import './style/layout.css';
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
          <Route path="/politicas-privacidad" element={<PoliticasPrivacidad />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/ubicacion" element={<UbicationPage />} />
          <Route path="/catalogPage" element={<CatalogPage />} />
          <Route path="/addMovies" element={<AddMoviePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;