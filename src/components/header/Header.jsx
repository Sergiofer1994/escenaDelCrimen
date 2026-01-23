import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="siteHeader">
      <div className="headerInner">
        <h1 className="logo">ESCENA DEL CRIMEN <img src="src\images\logos\logoEscenaCrimen.png" alt="logo escena del crimen" /></h1>
        <nav className="mainNav">
          <NavLink to="/" end>Inicio</NavLink>
          <NavLink to="/sobre-nosotros">Sobre nosotros</NavLink>
          <NavLink to="/terminos-uso">Términos de uso</NavLink>
          <NavLink to="/avisos-legales">Avisos legales</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
