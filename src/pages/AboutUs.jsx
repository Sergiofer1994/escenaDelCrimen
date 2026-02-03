import '../style/AboutUs.css';
import React, { useEffect } from 'react';  // ✅ AGREGADO useEffect
import { Link } from 'react-router-dom';

function AboutUs() {
    // ✅ SCROLL AL INICIO al cargar la página
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        
        <div className="tittleAboutUs">
            <div className="legalNotice">
                <h1>Sobre Nosotros</h1>
                <p className="lastUpdate">
                    Tu plataforma de streaming de crimen, misterio y suspenso
                </p>
            </div>

            <section className="aboutSection">
                <h2>Quiénes Somos</h2>
                <p>
                    Somos un equipo de desarrolladores, curadores de contenido y amantes del
                    cine y las series de crimen, dedicados a crear un videoclub digital
                    moderno y fácil de usar.
                </p>
                <p>
                    Fundada en 2026, Escena del Crimen nace como una alternativa temática a
                    las grandes plataformas de streaming, enfocándose exclusivamente en
                    historias intensas, investigaciones reales y ficción criminal de alta
                    calidad.
                </p>
            </section>

            <section className="aboutSection">
                <h2>Nuestros Valores</h2>
                <div className="valuesGrid">
                    <div className="valueCard">
                        <h3>🎬 Calidad</h3>
                        <p>
                            Seleccionamos contenido premium con altos estándares narrativos y
                            visuales.
                        </p>
                    </div>
                    <div className="valueCard">
                        <h3>🧠 Organización</h3>
                        <p>
                            Organizamos el catálogo por géneros y recomendaciones
                            personalizadas.
                        </p>
                    </div>
                    <div className="valueCard">
                        <h3>🚀 Innovación</h3>
                        <p>
                            Mejoramos constantemente la experiencia del usuario y la
                            plataforma.
                        </p>
                    </div>
                    <div className="valueCard">
                        <h3>🔐 Seguridad</h3>
                        <p>
                            Protegamos la información y privacidad de nuestros usuarios.
                        </p>
                    </div>
                </div>
            </section>

            <section className="aboutSection">
                <h2>Nuestro Equipo</h2>
                <div className="teamGrid">
                    <div className="teamMember">
                        <div className="memberInitial"><img src="src/images/aboutUs/sergioRecorte.png" alt="Sergio" /></div>
                        <h3>Sergio</h3>
                        <p className="role">P.O.</p>
                        <p>Apasionado por el cine criminal y Desarrollador Full Stack.</p>
                    </div>

                    <div className="teamMember">
                        <div className="memberInitial"><img src="src/images/aboutUs/melisa.png" alt="Melissa Gomez" /></div>
                        <h3>Melissa Gomez</h3>
                        <p className="role">SCRUM Master</p>
                        <p>Arquitecta de software y Desarrolladora Full Stack.</p>
                    </div>

                    <div className="teamMember">
                        <div className="memberInitial"><img src="src/images/aboutUs/heberPhoto.png" alt="Heber Paris" /></div>
                        <h3>Heber Paris</h3>
                        <p className="role">Dev</p>
                        <p>
                            Especialista en cine, series, documentales de crimen y Desarrolladora Full Stack.
                        </p>
                    </div>

                    <div className="teamMember">
                        <div className="memberInitial"><img src="src/images/aboutUs/juanluRecorte.png" alt="Juan Luís" /></div>
                        <h3>Juan Luís</h3>
                        <p className="role">Dev</p>
                        <p>
                            Diseñador de experiencias digitales intuitivas y Desarrolladora Full Stack.
                        </p>
                    </div>
                </div>
            </section>

            <section className="aboutSection">
                <h2>Qué Hacemos</h2>
                <ul>
                    <li>
                        <strong>Streaming:</strong> Ofrecemos un catálogo exclusivo de crimen
                        y suspenso
                    </li>
                    <li>
                        <strong>Recomendaciones:</strong> Sugerimos contenido según tus gustos
                    </li>
                    <li>
                        <strong>Listas personalizadas:</strong> Guarda tus favoritos y sigue
                        viendo
                    </li>
                    <li>
                        <strong>Perfiles:</strong> Crea perfiles para distintos usuarios
                    </li>
                    <li>
                        <strong>Actualizaciones:</strong> Agregamos nuevo contenido cada
                        semana
                    </li>
                </ul>
            </section>

            <section className="aboutSection">
                <h2>Nuestro Compromiso</h2>
                <p>
                    Nos comprometemos a ofrecer una plataforma estable, segura y con
                    contenido de alta calidad para todos los amantes del crimen y el
                    suspenso.
                </p>
                <p>
                    Trabajamos para que cada sesión en Escena del Crimen sea tan adictiva y
                    fluida como en cualquier gran plataforma de streaming.
                </p>
            </section>

            <section className="contactSection">
                <h2>Contacta con Nosotros</h2>
                <p>
                    ¿Tienes sugerencias de contenido? ¿Problemas técnicos? ¿Quieres
                    colaborar?
                </p>
                <ul>
                    <li>📧 Email: soporte@escenadelcrimen.com</li>
                    <li>📱 Teléfono: +34 981 555 777</li>
                    <li>📍 Dirección:Calle Real, 51, 15003 A Coruña, La Coruña</li>
                    <li>💬 Redes Sociales: Facebook, Instagram y TikTok</li>
                </ul>
            </section>

            <div className="backLink">
                <Link to="/">← Volver al inicio</Link>
            </div>
        </div>
    );
}

export default AboutUs;
