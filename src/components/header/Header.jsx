import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="siteHeader">
            <div className="headerInner">
                <img src="/src/images/logos/logoEscenaCrimen.png" className="logoHeader" alt="logo escena del crimen" />
                
                <div className="headerCenter">
                    <h1 className="header-title">ESCENA DEL CRIMEN</h1>

                    <nav className="mainNav">
                        <NavLink to="/" >Inicio</NavLink>
                        <NavLink to="/catalog">Catálogo</NavLink>
                        <NavLink to="/addMovies">Agregar Películas</NavLink>
                        <NavLink to="/contact">Contacto</NavLink>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;