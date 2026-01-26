import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="siteHeader">
            <img src="src\images\logos\logoEscenaCrimen.png" id="logoHeader" alt="logo escena del crimen" />
            <div className="headerInner">
                <h1 className="header-title">ESCENA DEL CRIMEN</h1>

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
